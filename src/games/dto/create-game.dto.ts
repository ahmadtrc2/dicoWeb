import { IsString,IsNumber } from "class-validator";
export class CreateGameDto {

    @IsNumber()
    id:number;
    @IsString()
    name:string;


    @IsString()
    description:string;

    @IsString()
    images:string;
    
}
  