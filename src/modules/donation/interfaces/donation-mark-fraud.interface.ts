import { IsString, Matches, MaxLength } from 'class-validator';

export class DonationMarkFraudInputDTO {
  @IsString()
  @Matches(/^[a-zA-Z\d_]+$/)
  @MaxLength(100)
  name: string;
}
