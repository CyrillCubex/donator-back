import { CampaignService } from '../services/campaign.service';
export declare class CampaignController {
    protected campaignService: CampaignService;
    constructor(campaignService: CampaignService);
    active(): Promise<import("../entities/campaign.entity").CampaignEntity[]>;
    getAll(): Promise<import("../entities/campaign.entity").CampaignEntity[]>;
}
