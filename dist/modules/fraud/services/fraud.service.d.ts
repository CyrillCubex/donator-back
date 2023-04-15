import { Repository } from 'typeorm';
import { FraudEntity } from '../entities/fraud.entity';
export declare class FraudService {
    protected readonly repository: Repository<FraudEntity>;
    constructor(repository: Repository<FraudEntity>);
    isFraud(donator: string): Promise<boolean>;
    makeFraud(donator: string): Promise<{
        ok: number;
    }>;
}
