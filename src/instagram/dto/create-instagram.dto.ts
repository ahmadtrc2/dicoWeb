import { IsString,IsNumber,IsDate } from "class-validator";

export class CreateInstagramDto {
    @IsNumber()
    id:number;
    


    @IsString()
    caption:string;

    @IsString()
    images:string;

    @IsDate()
    createdAt:string;


    @IsDate()
    updatedAt:string;
    
   
}
