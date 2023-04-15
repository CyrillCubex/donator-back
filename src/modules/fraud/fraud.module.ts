import { FraudService } from './services/fraud.service';
import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { FraudEntity } from './entities/fraud.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FraudEntity])],
  controllers: [],
  providers: [FraudService],
  exports: [FraudService],
})
export class FraudModule {}
