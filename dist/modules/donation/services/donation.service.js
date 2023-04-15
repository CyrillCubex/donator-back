"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationService = void 0;
const donation_entity_1 = require("./../entities/donation.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const fraud_service_1 = require("../../fraud/services/fraud.service");
const campaign_service_1 = require("../../campaign/services/campaign.service");
const campaign_status_enum_1 = require("../../campaign/enums/campaign-status.enum");
let DonationService = class DonationService {
    constructor(repository, fraudService, campaignService) {
        this.repository = repository;
        this.fraudService = fraudService;
        this.campaignService = campaignService;
    }
    async create(data) {
        const isFraud = await this.fraudService.isFraud(data.name);
        if (isFraud) {
            await this.campaignService.makeFraud([+data.campaignId]);
        }
        const model = new donation_entity_1.DonationEntity();
        model.name = data.name;
        model.campaign = { id: +data.campaignId };
        model.amount = +data.amount.toFixed(2);
        await model.save();
        const campaign = await this.campaignService.byId(+data.campaignId);
        const value = await this.value(+data.campaignId);
        if (+campaign.goal <= +value && campaign.status !== campaign_status_enum_1.ECampaignStatus.FRAUD) {
            await this.campaignService.makeSuccess(+data.campaignId);
        }
        return model;
    }
    async makeFraud(donator) {
        await this.fraudService.makeFraud(donator);
        const donations = await this.repository
            .createQueryBuilder()
            .select('DISTINCT campaignId')
            .where({ name: donator })
            .getRawMany();
        const ids = donations.map((dontaion) => dontaion.campaignId);
        await this.campaignService.makeFraud(ids);
        return ids;
    }
    async value(campaignId) {
        const { sum } = await this.repository
            .createQueryBuilder()
            .select('SUM(amount)', 'sum')
            .where({ campaign: { id: campaignId } })
            .getRawOne();
        return sum;
    }
};
DonationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(donation_entity_1.DonationEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        fraud_service_1.FraudService,
        campaign_service_1.CampaignService])
], DonationService);
exports.DonationService = DonationService;
//# sourceMappingURL=donation.service.js.map