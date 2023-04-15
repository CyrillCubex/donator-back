"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1681543786946 = void 0;
class Migration1681543786946 {
    constructor() {
        this.name = 'Migration1681543786946';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`campaign\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`desc\` text NOT NULL, \`goal\` decimal(14,2) NOT NULL DEFAULT '0.00', \`status\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`campaign\``);
    }
}
exports.Migration1681543786946 = Migration1681543786946;
//# sourceMappingURL=1681543786946-migration.js.map