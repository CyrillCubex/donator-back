import { BaseEntity } from 'typeorm';
import { CampaignEntity } from '../../campaign/entities/campaign.entity';
export declare class DonationEntity extends BaseEntity {
    id: number;
    name: string;
    campaign: CampaignEntity;
    amount: number;
}
