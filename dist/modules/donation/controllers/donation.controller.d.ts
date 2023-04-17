import { DonationMarkFraudInputDTO } from './../interfaces/donation-mark-fraud.interface';
import { DonationCreateInputDTO } from '../interfaces/dontation-create.interface';
import { DonationService } from '../services/donation.service';
export declare class DonationController {
    protected donationService: DonationService;
    constructor(donationService: DonationService);
    create(body: DonationCreateInputDTO): Promise<import("../entities/donation.entity").DonationEntity>;
    value(id: string): Promise<any>;
    fraud(body: DonationMarkFraudInputDTO): Promise<any>;
}
