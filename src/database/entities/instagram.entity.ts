import { Entity,Column,
     CreateDateColumn,
     UpdateDateColumn,
     PrimaryGeneratedColumn,
     AfterInsert,
     AfterUpdate,
     AfterRemove } from 'typeorm'

@Entity({name:"instagram"})
export class Instagram {
    @PrimaryGeneratedColumn()
    id:number
    

    @Column()
    location:string        

    @Column()
    caption:string;

    @Column()
    images:string;

    @CreateDateColumn()
    createdAt : String
 
    @UpdateDateColumn()
    updatedAt : String


    
    @AfterInsert()
    logInsert(){
        console.log('inserted Post with id',this.id);

    }
    @AfterUpdate()
    logUpdate(){
        console.log('Updated Post with id',this.id);

    }
    @AfterRemove()
    logRemove(){
        console.log('Removed Post with id',this.id);

    }
}