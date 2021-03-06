import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import Lesson from './Lesson'

@Entity('content')
export default class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  description: string

  @Column()
  link_content: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToOne((type) => Lesson, (content) => Content)
  @JoinColumn()
  lesson: Lesson
}
