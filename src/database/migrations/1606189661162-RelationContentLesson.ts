import { MigrationInterface, QueryRunner } from 'typeorm'

export default class RelationContentLesson1606189661162 implements MigrationInterface {
  name = 'RelationContentLesson1606189661162'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "lesson" ADD CONSTRAINT "FK_4b7d004f5939b7d7f4238526680" FOREIGN KEY ("contentId") REFERENCES "content"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "student"`)
    await queryRunner.query(`DROP TABLE "class"`)
    await queryRunner.query(`DROP TABLE "lesson"`)
    await queryRunner.query(`DROP TABLE "content"`)
  }
}
