import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import Class from './Class'
import Content from './Content'

@Entity('lesson')
export default class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  description: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToOne((type) => Content, (lesson) => Lesson)
  content: Content

  @ManyToOne((type) => Class, (lessons) => Lesson, { eager: true })
  classes: Class
}
