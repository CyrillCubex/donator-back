"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1681548426387 = void 0;
class Migration1681548426387 {
    constructor() {
        this.name = 'Migration1681548426387';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`dontaion\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`amount\` decimal(14,2) NOT NULL DEFAULT '0.00', \`campaignId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`dontaion\` ADD CONSTRAINT \`FK_72d8efb35f0ca72cb5f7b91c740\` FOREIGN KEY (\`campaignId\`) REFERENCES \`campaign\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`dontaion\` DROP FOREIGN KEY \`FK_72d8efb35f0ca72cb5f7b91c740\``);
        await queryRunner.query(`DROP TABLE \`dontaion\``);
    }
}
exports.Migration1681548426387 = Migration1681548426387;
//# sourceMappingURL=1681548426387-migration.js.map