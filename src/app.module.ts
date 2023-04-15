import { ormconfig } from './db/source';
import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignModule } from './modules/campaign/campaign.module';
import { DontaionModule } from './modules/donation/donation.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), CampaignModule, DontaionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
