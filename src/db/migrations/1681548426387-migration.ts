import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1681548426387 implements MigrationInterface {
    name = 'Migration1681548426387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`dontaion\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`amount\` decimal(14,2) NOT NULL DEFAULT '0.00', \`campaignId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`dontaion\` ADD CONSTRAINT \`FK_72d8efb35f0ca72cb5f7b91c740\` FOREIGN KEY (\`campaignId\`) REFERENCES \`campaign\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`dontaion\` DROP FOREIGN KEY \`FK_72d8efb35f0ca72cb5f7b91c740\``);
        await queryRunner.query(`DROP TABLE \`dontaion\``);
    }

}
