import { MigrationInterface, QueryRunner } from "typeorm";

export class AppMigration1742464026390 implements MigrationInterface {
    name = 'AppMigration1742464026390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`avatar\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`comments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`content\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT Thu Mar 20 2025 15:47:06 GMT+0600 (Bangladesh Standard Time), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`posts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT Thu Mar 20 2025 15:47:06 GMT+0600 (Bangladesh Standard Time), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`posts\``);
        await queryRunner.query(`DROP TABLE \`comments\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
