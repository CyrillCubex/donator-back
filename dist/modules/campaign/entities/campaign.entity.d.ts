import { ECampaignStatus } from '../enums/campaign-status.enum';
import { DonationEntity } from '../../donation/entities/donation.entity';
export declare class CampaignEntity {
    id: number;
    name: string;
    desc: string;
    goal: number;
    status: ECampaignStatus;
    donations: DonationEntity[];
}
