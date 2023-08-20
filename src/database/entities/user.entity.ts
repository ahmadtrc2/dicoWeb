import {
  Entity,
  OneToOne,
  JoinColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
  ManyToMany,
  AfterInsert,
  DataSource,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true, unique: true })
  email: string;

  @Column({ nullable: true, unique: true })
  phone: string;

  @Column()
  token: string;



  @CreateDateColumn()
  createdAt: String;

  @UpdateDateColumn({ nullable: true, default: null })
  updtedAt: String;

}
