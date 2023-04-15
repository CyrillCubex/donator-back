import { DonationEntity } from './../entities/donation.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { IDonationCreateInput } from '../interfaces/dontation-create.interface';
import { CampaignEntity } from '../../campaign/entities/campaign.entity';
import { FraudService } from '../../fraud/services/fraud.service';
import { CampaignService } from '../../campaign/services/campaign.service';
import { ECampaignStatus } from '../../campaign/enums/campaign-status.enum';

@Injectable()
export class DonationService {
  constructor(
    @InjectRepository(DonationEntity)
    protected readonly repository: Repository<DonationEntity>,
    protected readonly fraudService: FraudService,
    protected readonly campaignService: CampaignService,
  ) {}

  async create(data: IDonationCreateInput) {
    const isFraud = await this.fraudService.isFraud(data.name);

    if (isFraud) {
      await this.campaignService.makeFraud([+data.campaignId]);
    }

    const model = new DonationEntity();
    model.name = data.name;
    model.campaign = { id: +data.campaignId } as CampaignEntity;
    model.amount = +data.amount.toFixed(2);

    await model.save();
    const campaign = await this.campaignService.byId(+data.campaignId);
    const value = await this.value(+data.campaignId);

    if (+campaign.goal <= +value && campaign.status !== ECampaignStatus.FRAUD) {
      await this.campaignService.makeSuccess(+data.campaignId);
    }

    return model;
  }

  async makeFraud(donator: string) {
    await this.fraudService.makeFraud(donator);
    const donations = await this.repository
      .createQueryBuilder()
      .select('DISTINCT campaignId')
      .where({ name: donator })
      .getRawMany();

    const ids = donations.map((dontaion) => dontaion.campaignId);
    await this.campaignService.makeFraud(ids);

    return ids;
  }

  async value(campaignId: number) {
    const { sum } = await this.repository
      .createQueryBuilder()
      .select('SUM(amount)', 'sum')
      .where({ campaign: { id: campaignId } as CampaignEntity })
      .getRawOne();

    return sum;
  }
}
