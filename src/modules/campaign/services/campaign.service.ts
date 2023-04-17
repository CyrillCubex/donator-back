import { CampaignEntity } from '../entities/campaign.entity';
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { ECampaignStatus } from '../enums/campaign-status.enum';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(CampaignEntity)
    protected readonly repository: Repository<CampaignEntity>,
  ) {}

  async allActive() {
    return await this.repository.query('SELECT id, name, `desc`, goal, status FROM campaign WHERE (status = 1)');
  }
  async all() {
    return await this.repository.query(
      'SELECT id, name, `desc`, goal, status FROM campaign',
    );
  }
  async makeFraud(ids: number[]) {
    if (!ids.length) return;
    const idValues = ids.map((id) => `'${id}'`).join(',');
    await this.repository.query(
      'UPDATE `campaign` SET `status` = ? WHERE id IN (' + idValues + ')',
      [ECampaignStatus.FRAUD],
    );
  }
  async makeSuccess(id: number) {
    return this.repository.query(
      'UPDATE `campaign` SET `status` = ? WHERE id = ?',
      [ECampaignStatus.SUCCESS, id],
    );
  }
  async byId(id: number) {
    const result = await this.repository.query(
      'SELECT * FROM campaign WHERE id = ? LIMIT 1',
      [id],
    );
    return result[0];
  }
}
