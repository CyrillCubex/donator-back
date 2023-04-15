import { CampaignEntity } from '../entities/campaign.entity';
import { Repository } from 'typeorm';
export declare class CampaignService {
    protected readonly repository: Repository<CampaignEntity>;
    constructor(repository: Repository<CampaignEntity>);
    allActive(): Promise<CampaignEntity[]>;
    all(): Promise<CampaignEntity[]>;
    makeFraud(ids: number[]): Promise<import("typeorm").UpdateResult>;
    makeSuccess(id: number): Promise<import("typeorm").UpdateResult>;
    byId(id: number): Promise<CampaignEntity>;
}
