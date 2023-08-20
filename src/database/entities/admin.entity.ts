import { Entity,Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
 } from 'typeorm'

@Entity({name:"admin"})
export class Admin {
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    name:string

    @Column()
    accessLevel:string;


    @CreateDateColumn()
    createdAt : String
 
    @UpdateDateColumn()
    updatedAt : String
 
}