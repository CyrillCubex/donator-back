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
exports.CampaignService = void 0;
const campaign_entity_1 = require("../entities/campaign.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const campaign_status_enum_1 = require("../enums/campaign-status.enum");
let CampaignService = class CampaignService {
    constructor(repository) {
        this.repository = repository;
    }
    async allActive() {
        return await this.repository.find({
            where: { status: campaign_status_enum_1.ECampaignStatus.ACTIVE },
        });
    }
    async all() {
        return await this.repository.find();
    }
    async makeFraud(ids) {
        return await this.repository
            .createQueryBuilder()
            .update()
            .set({ status: campaign_status_enum_1.ECampaignStatus.FRAUD })
            .where({ id: (0, typeorm_2.In)(ids) })
            .execute();
    }
    async makeSuccess(id) {
        return this.repository.update({ id }, { status: campaign_status_enum_1.ECampaignStatus.SUCCESS });
    }
    async byId(id) {
        return this.repository.findOne({ where: { id } });
    }
};
CampaignService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(campaign_entity_1.CampaignEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CampaignService);
exports.CampaignService = CampaignService;
//# sourceMappingURL=campaign.service.js.map