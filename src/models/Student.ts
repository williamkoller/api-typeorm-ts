import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { IsEmail, Max, MaxLength, Min, MinLength } from 'class-validator'
import Class from './Class'

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  @MaxLength(50, { message: 'Name must be a maximum of 50 characters' })
  @MinLength(2, { message: 'Name must be at least 1 characters' })
  name: string

  @Column()
  @Max(99999)
  @Min(10000)
  key: number

  @Column({ unique: true })
  @IsEmail()
  email: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToMany((type) => Class)
  @JoinTable()
  classes: Class
}
