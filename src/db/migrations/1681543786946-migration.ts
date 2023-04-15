import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1681543786946 implements MigrationInterface {
  name = 'Migration1681543786946';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`campaign\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`desc\` text NOT NULL, \`goal\` decimal(14,2) NOT NULL DEFAULT '0.00', \`status\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`campaign\``);
  }
}
