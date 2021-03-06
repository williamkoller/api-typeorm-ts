import { MigrationInterface, QueryRunner } from 'typeorm'

export default class Relations1606268356863 implements MigrationInterface {
  name = 'Relations1606268356863'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "student_classes_class" ("studentId" uuid NOT NULL, "classId" uuid NOT NULL, CONSTRAINT "PK_9f2c655a5feb7cff342af016c8e" PRIMARY KEY ("studentId", "classId"))`,
    )
    await queryRunner.query(`CREATE INDEX "IDX_4e224193a4e2c8e1b28afa74e9" ON "student_classes_class" ("studentId") `)
    await queryRunner.query(`CREATE INDEX "IDX_3d4b9aa106e0113abd39f06182" ON "student_classes_class" ("classId") `)

    await queryRunner.query(
      `ALTER TABLE "student_classes_class" ADD CONSTRAINT "FK_3d4b9aa106e0113abd39f061827" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "student_classes_class" DROP CONSTRAINT "FK_3d4b9aa106e0113abd39f061827"`)
    await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "UQ_a56c051c91dbe1068ad683f536e"`)
    await queryRunner.query(`ALTER TABLE "lesson" ADD "contentId" uuid`)
    await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "REL_4b7d004f5939b7d7f423852668" UNIQUE ("contentId")`)
    await queryRunner.query(`DROP INDEX "IDX_3d4b9aa106e0113abd39f06182"`)
    await queryRunner.query(`DROP INDEX "IDX_4e224193a4e2c8e1b28afa74e9"`)
    await queryRunner.query(`DROP TABLE "student_classes_class"`)
  }
}
