import { IsNumber, IsString, Min, Matches, MaxLength } from 'class-validator';

export interface IDonationCreateInput {
  name: string;
  campaignId: number;
  amount: number;
}

export class DonationCreateInputDTO implements IDonationCreateInput {
  @IsString()
  @Matches(/^[a-zA-Z\d_]+$/)
  @MaxLength(100)
  name: string;

  @IsNumber()
  @Min(1)
  campaignId: number;

  @IsNumber()
  amount: number;
}
