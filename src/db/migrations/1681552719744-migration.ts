import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1681552719744 implements MigrationInterface {
    name = 'Migration1681552719744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`fraud\` ADD UNIQUE INDEX \`IDX_a25825a77344f51310a490ad35\` (\`name\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_6dbcc5c08398390131719777c3\` ON \`dontaion\` (\`name\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_72d8efb35f0ca72cb5f7b91c74\` ON \`dontaion\` (\`campaignId\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_72d8efb35f0ca72cb5f7b91c74\` ON \`dontaion\``);
        await queryRunner.query(`DROP INDEX \`IDX_6dbcc5c08398390131719777c3\` ON \`dontaion\``);
        await queryRunner.query(`ALTER TABLE \`fraud\` DROP INDEX \`IDX_a25825a77344f51310a490ad35\``);
    }

}
