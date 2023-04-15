export interface IDonationCreateInput {
    name: string;
    campaignId: number;
    amount: number;
}
export declare class DonationCreateInputDTO implements IDonationCreateInput {
    name: string;
    campaignId: number;
    amount: number;
}
