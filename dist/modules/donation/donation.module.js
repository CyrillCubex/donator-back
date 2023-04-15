"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DontaionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const campaign_module_1 = require("../campaign/campaign.module");
const fraud_module_1 = require("../fraud/fraud.module");
const donation_controller_1 = require("./controllers/donation.controller");
const donation_entity_1 = require("./entities/donation.entity");
const donation_service_1 = require("./services/donation.service");
let DontaionModule = class DontaionModule {
};
DontaionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([donation_entity_1.DonationEntity]),
            campaign_module_1.CampaignModule,
            fraud_module_1.FraudModule,
        ],
        controllers: [donation_controller_1.DonationController],
        providers: [donation_service_1.DonationService],
        exports: [],
    })
], DontaionModule);
exports.DontaionModule = DontaionModule;
//# sourceMappingURL=donation.module.js.map