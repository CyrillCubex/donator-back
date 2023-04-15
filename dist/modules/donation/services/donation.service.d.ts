import { DonationEntity } from './../entities/donation.entity';
import { Repository } from 'typeorm';
import { IDonationCreateInput } from '../interfaces/dontation-create.interface';
import { FraudService } from '../../fraud/services/fraud.service';
import { CampaignService } from '../../campaign/services/campaign.service';
export declare class DonationService {
    protected readonly repository: Repository<DonationEntity>;
    protected readonly fraudService: FraudService;
    protected readonly campaignService: CampaignService;
    constructor(repository: Repository<DonationEntity>, fraudService: FraudService, campaignService: CampaignService);
    create(data: IDonationCreateInput): Promise<DonationEntity>;
    makeFraud(donator: string): Promise<any[]>;
    value(campaignId: number): Promise<any>;
}
