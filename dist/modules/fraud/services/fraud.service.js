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
exports.FraudService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const fraud_entity_1 = require("../entities/fraud.entity");
let FraudService = class FraudService {
    constructor(repository) {
        this.repository = repository;
    }
    async isFraud(donator) {
        const count = await this.repository.count({ where: { name: donator } });
        return count > 0;
    }
    async makeFraud(donator) {
        const isFraud = await this.isFraud(donator);
        if (!isFraud) {
            const model = new fraud_entity_1.FraudEntity();
            model.name = donator;
            await model.save();
        }
        return { ok: 1 };
    }
};
FraudService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(fraud_entity_1.FraudEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FraudService);
exports.FraudService = FraudService;
//# sourceMappingURL=fraud.service.js.map