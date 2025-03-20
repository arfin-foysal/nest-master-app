import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatedByAddMigration1742494083072 implements MigrationInterface {
    name = 'CreatedByAddMigration1742494083072'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`createdById\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD CONSTRAINT \`FK_14ee02b0fe49a09d1bcee6ce5ba\` FOREIGN KEY (\`createdById\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` DROP FOREIGN KEY \`FK_14ee02b0fe49a09d1bcee6ce5ba\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`createdById\``);
    }

}
