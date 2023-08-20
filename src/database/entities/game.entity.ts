import { Entity,Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    ManyToMany,
    ManyToOne, 
    AfterInsert,
    AfterRemove,
    AfterUpdate
 } from 'typeorm'

@Entity({name:"game"})
export class Game {
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    name:string

    @Column()
    description:string;

    @Column()
    images:string;

    @CreateDateColumn()
    createdAt : String
 
    @UpdateDateColumn()
    updatedAt : String

    @AfterInsert()
    logInsert(){
        console.log('inserted Game with id',this.id);

    }
    @AfterUpdate()
    logUpdate(){
        console.log('Updated Game with id',this.id);

    }
    @AfterRemove()
    logRemove(){
        console.log('Removed Game with id',this.id);

    }
    
}