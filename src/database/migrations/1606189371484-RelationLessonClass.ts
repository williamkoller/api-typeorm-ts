import { MigrationInterface, QueryRunner } from 'typeorm'

export default class RelationLessonClass1606189371484 implements MigrationInterface {
  name = 'RelationLessonClass1606189371484'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "content" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "key" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "lessonId" uuid, CONSTRAINT "REL_0b349f6b8ca7f05eed39ffb956" UNIQUE ("lessonId"), CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "lesson" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "contentId" uuid, "classesId" uuid, CONSTRAINT "REL_4b7d004f5939b7d7f423852668" UNIQUE ("contentId"), CONSTRAINT "PK_0ef25918f0237e68696dee455bd" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "link_content" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "name"`)
    await queryRunner.query(`ALTER TABLE "class" ADD "name" character varying(100) NOT NULL`)
    await queryRunner.query(`ALTER TABLE "class" ADD CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd" UNIQUE ("name")`)
    await queryRunner.query(
      `ALTER TABLE "content" ADD CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )

    await queryRunner.query(
      `ALTER TABLE "lesson" ADD CONSTRAINT "FK_24df875df1c911a41db18ff8773" FOREIGN KEY ("classesId") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_24df875df1c911a41db18ff8773"`)
    await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_4b7d004f5939b7d7f4238526680"`)
    await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d"`)
    await queryRunner.query(`ALTER TABLE "class" DROP CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd"`)
    await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "name"`)
    await queryRunner.query(`ALTER TABLE "class" ADD "name" character varying NOT NULL`)
    await queryRunner.query(`DROP TABLE "student"`)
    await queryRunner.query(`DROP TABLE "lesson"`)
    await queryRunner.query(`DROP TABLE "content"`)
  }
}
