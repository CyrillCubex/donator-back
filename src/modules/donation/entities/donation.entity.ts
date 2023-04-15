import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  Index,
} from 'typeorm';
import { CampaignEntity } from '../../campaign/entities/campaign.entity';

@Entity({ name: 'dontaion' })
export class DonationEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  name: string;

  @ManyToOne(() => CampaignEntity, (camp) => camp.donations)
  @Index()
  campaign: CampaignEntity;

  @Column({ type: 'decimal', precision: 14, scale: 2, default: 0 })
  amount: number;
}
