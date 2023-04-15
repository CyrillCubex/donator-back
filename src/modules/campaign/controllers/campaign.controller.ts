import { CampaignService } from '../services/campaign.service';
import { Controller, Get } from '@nestjs/common';

@Controller('campaign')
export class CampaignController {
  constructor(protected campaignService: CampaignService) {}
  @Get('active')
  async active() {
    return this.campaignService.allActive();
  }
  @Get('all')
  async getAll() {
    return this.campaignService.all();
  }
}
