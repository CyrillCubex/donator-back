"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const campaign_controller_1 = require("./controllers/campaign.controller");
const campaign_entity_1 = require("./entities/campaign.entity");
const campaign_service_1 = require("./services/campaign.service");
let CampaignModule = class CampaignModule {
};
CampaignModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([campaign_entity_1.CampaignEntity])],
        controllers: [campaign_controller_1.CampaignController],
        providers: [campaign_service_1.CampaignService],
        exports: [campaign_service_1.CampaignService],
    })
], CampaignModule);
exports.CampaignModule = CampaignModule;
//# sourceMappingURL=campaign.module.js.map