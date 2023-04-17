import { CampaignService } from '../services/campaign.service';
export declare class CampaignController {
    protected campaignService: CampaignService;
    constructor(campaignService: CampaignService);
    active(): Promise<any>;
    getAll(): Promise<any>;
}
