import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { FraudEntity } from '../entities/fraud.entity';

@Injectable()
export class FraudService {
  constructor(
    @InjectRepository(FraudEntity)
    protected readonly repository: Repository<FraudEntity>,
  ) {}

  async isFraud(donator: string) {
    const count = await this.repository.count({ where: { name: donator } });
    return count > 0;
  }

  async makeFraud(donator: string) {
    const isFraud = await this.isFraud(donator);
    if (!isFraud) {
      const model = new FraudEntity();
      model.name = donator;
      await model.save();
    }

    return { ok: 1 };
  }
}
