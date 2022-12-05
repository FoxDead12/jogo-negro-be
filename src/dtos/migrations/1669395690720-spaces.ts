import { MigrationInterface, QueryRunner } from "typeorm";

export class spaces1669395690720 implements MigrationInterface {
    name = 'spaces1669395690720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Spaces\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`location\` varchar(255) NOT NULL, \`imageUrl\` varchar(255) NOT NULL, \`mapsUrl\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`Spaces\``);
    }

}
