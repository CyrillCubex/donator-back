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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignEntity = void 0;
const campaign_status_enum_1 = require("../enums/campaign-status.enum");
const typeorm_1 = require("typeorm");
const donation_entity_1 = require("../../donation/entities/donation.entity");
let CampaignEntity = class CampaignEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CampaignEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CampaignEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], CampaignEntity.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 14, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], CampaignEntity.prototype, "goal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CampaignEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => donation_entity_1.DonationEntity, (donation) => donation.campaign),
    __metadata("design:type", Array)
], CampaignEntity.prototype, "donations", void 0);
CampaignEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'campaign' })
], CampaignEntity);
exports.CampaignEntity = CampaignEntity;
//# sourceMappingURL=campaign.entity.js.map