import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1675170991562 implements MigrationInterface {
    name = 'createTables1675170991562'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "telefone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "telefone" integer NOT NULL`);
    }

}
