"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1681552126095 = void 0;
class Migration1681552126095 {
    constructor() {
        this.name = 'Migration1681552126095';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`fraud\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`fraud\``);
    }
}
exports.Migration1681552126095 = Migration1681552126095;
//# sourceMappingURL=1681552126095-migration.js.map