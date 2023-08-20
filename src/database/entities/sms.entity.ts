import { Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, Entity } from 'typeorm'

@Entity()
export class Sms {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    phone: string

    @Column({nullable:true})
    text: string

    @CreateDateColumn()
    createdAt : String
 
    @UpdateDateColumn()
    updtedAt : String
}
