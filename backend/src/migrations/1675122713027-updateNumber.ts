import { MigrationInterface, QueryRunner } from "typeorm";

export class updateNumber1675122713027 implements MigrationInterface {
    name = 'updateNumber1675122713027'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "telefone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "telefone" integer NOT NULL`);
    }

}
