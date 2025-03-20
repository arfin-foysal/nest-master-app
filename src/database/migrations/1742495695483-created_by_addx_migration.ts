import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatedByAddxMigration1742495695483 implements MigrationInterface {
    name = 'CreatedByAddxMigration1742495695483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` DROP FOREIGN KEY \`FK_14ee02b0fe49a09d1bcee6ce5ba\``);
        await queryRunner.query(`ALTER TABLE \`posts\` CHANGE \`createdById\` \`createdBy\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` CHANGE \`createdBy\` \`createdBy\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD CONSTRAINT \`FK_1456f11d31059e5d0a6582c7943\` FOREIGN KEY (\`createdBy\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` DROP FOREIGN KEY \`FK_1456f11d31059e5d0a6582c7943\``);
        await queryRunner.query(`ALTER TABLE \`posts\` CHANGE \`createdBy\` \`createdBy\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` CHANGE \`createdBy\` \`createdById\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD CONSTRAINT \`FK_14ee02b0fe49a09d1bcee6ce5ba\` FOREIGN KEY (\`createdById\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
