import { MigrationInterface, QueryRunner } from "typeorm";

export class addActive1670350522862 implements MigrationInterface {
    name = 'addActive1670350522862'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Services\` ADD \`active\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`Spaces\` ADD \`active\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Spaces\` DROP COLUMN \`active\``);
        await queryRunner.query(`ALTER TABLE \`Services\` DROP COLUMN \`active\``);
    }

}
