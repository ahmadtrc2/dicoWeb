import { Injectable } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { randomBytes, scrypt as _scrypt } from "crypto";
import { promisify } from "util";

const scrypt = promisify(_scrypt)

@Injectable()
export class AuthService{
constructor(private adminservice: AdminService){}

// signup(){
//     const admin =await
// }

async hashing(password:string){
    const salt = randomBytes(8).toString('hex')

    const hash = await scrypt(password,salt,32) as Buffer

    const result = salt + '.' + hash.toString('hex')
}6

signin(){

}
}
