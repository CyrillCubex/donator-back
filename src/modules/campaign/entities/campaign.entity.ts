import { ECampaignStatus } from '../enums/campaign-status.enum';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { DonationEntity } from '../../donation/entities/donation.entity';

@Entity({ name: 'campaign' })
export class CampaignEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text' })
  desc: string;

  @Column({ type: 'decimal', precision: 14, scale: 2, default: 0 })
  goal: number;

  @Column()
  status: ECampaignStatus;

  @OneToMany(() => DonationEntity, (donation) => donation.campaign)
  donations: DonationEntity[];
}
