import { MigrationInterface, QueryRunner } from "typeorm"
import { CreateUserDOWN, CreateUserUP } from "../storeProcedures/CreateUser";
import { LoginDOWN, LoginUP } from "../storeProcedures/Login";

export class procedures1668997151286 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(CreateUserUP);
        await queryRunner.query(LoginUP);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(CreateUserDOWN);
        await queryRunner.query(LoginDOWN);

    }

}
