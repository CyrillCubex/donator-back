import { CampaignEntity } from '../entities/campaign.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { ECampaignStatus } from '../enums/campaign-status.enum';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(CampaignEntity)
    protected readonly repository: Repository<CampaignEntity>,
  ) {}

  async allActive() {
    return await this.repository.find({
      where: { status: ECampaignStatus.ACTIVE },
    });
  }
  async all() {
    return await this.repository.find();
  }
  async makeFraud(ids: number[]) {
    return await this.repository
      .createQueryBuilder()
      .update()
      .set({ status: ECampaignStatus.FRAUD })
      .where({ id: In(ids) })
      .execute();
  }
  async makeSuccess(id: number) {
    return this.repository.update({ id }, { status: ECampaignStatus.SUCCESS });
  }
  async byId(id: number) {
    return this.repository.findOne({ where: { id } });
  }
}
