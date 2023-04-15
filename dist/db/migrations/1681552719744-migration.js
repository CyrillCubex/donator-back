"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1681552719744 = void 0;
class Migration1681552719744 {
    constructor() {
        this.name = 'Migration1681552719744';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`fraud\` ADD UNIQUE INDEX \`IDX_a25825a77344f51310a490ad35\` (\`name\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_6dbcc5c08398390131719777c3\` ON \`dontaion\` (\`name\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_72d8efb35f0ca72cb5f7b91c74\` ON \`dontaion\` (\`campaignId\`)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_72d8efb35f0ca72cb5f7b91c74\` ON \`dontaion\``);
        await queryRunner.query(`DROP INDEX \`IDX_6dbcc5c08398390131719777c3\` ON \`dontaion\``);
        await queryRunner.query(`ALTER TABLE \`fraud\` DROP INDEX \`IDX_a25825a77344f51310a490ad35\``);
    }
}
exports.Migration1681552719744 = Migration1681552719744;
//# sourceMappingURL=1681552719744-migration.js.map