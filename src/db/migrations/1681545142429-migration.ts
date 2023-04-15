import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1681545142429 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    let limit = 100;
    while (limit--) {
      const name = `campaign${limit}`;
      const desc = `campaign${name}${name}${name}${name}`;
      const goal = (Math.random() * 100000 + 100).toFixed(2);
      const sql = `INSERT INTO campaign (name, \`desc\`, goal, status) VALUES ("${name}", "${desc}", "${goal}", 1)`;
      await queryRunner.query(sql);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE TABLE campaign`);
  }
}
