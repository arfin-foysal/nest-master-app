import { MigrationInterface, QueryRunner } from "typeorm";

export class YourMigrationName1742022769485 implements MigrationInterface {
    name = 'YourMigrationName1742022769485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`location\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`location\``);
    }

}
