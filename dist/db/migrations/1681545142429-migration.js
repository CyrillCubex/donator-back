"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1681545142429 = void 0;
class Migration1681545142429 {
    async up(queryRunner) {
        let limit = 100;
        while (limit--) {
            const name = `campaign${limit}`;
            const desc = `campaign${name}${name}${name}${name}`;
            const goal = (Math.random() * 100000 + 100).toFixed(2);
            const sql = `INSERT INTO campaign (name, \`desc\`, goal, status) VALUES ("${name}", "${desc}", "${goal}", 1)`;
            await queryRunner.query(sql);
        }
    }
    async down(queryRunner) {
        await queryRunner.query(`TRUNCATE TABLE campaign`);
    }
}
exports.Migration1681545142429 = Migration1681545142429;
//# sourceMappingURL=1681545142429-migration.js.map