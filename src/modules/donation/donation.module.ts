import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignModule } from '../campaign/campaign.module';
import { FraudModule } from '../fraud/fraud.module';
import { DonationController } from './controllers/donation.controller';
import { DonationEntity } from './entities/donation.entity';
import { DonationService } from './services/donation.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DonationEntity]),
    CampaignModule,
    FraudModule,
  ],
  controllers: [DonationController],
  providers: [DonationService],
  exports: [],
})
export class DontaionModule {}
