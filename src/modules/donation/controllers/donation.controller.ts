import { DonationMarkFraudInputDTO } from './../interfaces/donation-mark-fraud.interface';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DonationCreateInputDTO } from '../interfaces/dontation-create.interface';
import { DonationService } from '../services/donation.service';

@Controller('donation')
export class DonationController {
  constructor(protected donationService: DonationService) {}

  @Post()
  async create(@Body() body: DonationCreateInputDTO) {
    return this.donationService.create(body);
  }

  @Get(':id')
  async value(@Param('id') id: string) {
    return this.donationService.value(+id);
  }

  @Post('mark-as-fraud')
  async fraud(@Body() body: DonationMarkFraudInputDTO) {
    return this.donationService.makeFraud(body.name);
  }
}
