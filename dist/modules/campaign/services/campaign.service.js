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
        return await this.repository.query('SELECT id, name, `desc`, goal, status FROM campaign WHERE (status = 1)');
    }
    async all() {
        return await this.repository.query('SELECT id, name, `desc`, goal, status FROM campaign');
    }
    async makeFraud(ids) {
        if (!ids.length)
            return;
        const idValues = ids.map((id) => `'${id}'`).join(',');
        await this.repository.query('UPDATE `campaign` SET `status` = ? WHERE id IN (' + idValues + ')', [campaign_status_enum_1.ECampaignStatus.FRAUD]);
    }
    async makeSuccess(id) {
        return this.repository.query('UPDATE `campaign` SET `status` = ? WHERE id = ?', [campaign_status_enum_1.ECampaignStatus.SUCCESS, id]);
    }
    async byId(id) {
        const result = await this.repository.query('SELECT * FROM campaign WHERE id = ? LIMIT 1', [id]);
        return result[0];
    }
};
CampaignService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(campaign_entity_1.CampaignEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CampaignService);
exports.CampaignService = CampaignService;
//# sourceMappingURL=campaign.service.js.map