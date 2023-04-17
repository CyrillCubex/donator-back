import { CampaignEntity } from '../entities/campaign.entity';
import { Repository } from 'typeorm';
export declare class CampaignService {
    protected readonly repository: Repository<CampaignEntity>;
    constructor(repository: Repository<CampaignEntity>);
    allActive(): Promise<any>;
    all(): Promise<any>;
    makeFraud(ids: number[]): Promise<void>;
    makeSuccess(id: number): Promise<any>;
    byId(id: number): Promise<any>;
}
