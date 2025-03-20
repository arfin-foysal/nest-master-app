import { MigrationInterface, QueryRunner } from "typeorm";

export class AppMigrationd1742464106192 implements MigrationInterface {
    name = 'AppMigrationd1742464106192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`comments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`content\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT Thu Mar 20 2025 15:48:26 GMT+0600 (Bangladesh Standard Time), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`posts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`posts\``);
        await queryRunner.query(`DROP TABLE \`comments\``);
    }

}
