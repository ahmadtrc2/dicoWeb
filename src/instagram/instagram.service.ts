import { Injectable } from '@nestjs/common';
import { CreateInstagramDto } from './dto/create-instagram.dto';
import { UpdateInstagramDto } from './dto/update-instagram.dto';
import Instagram from 'node-instagram';
import { Instagram as InstagramEntity } from './entities/instagram.entity';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InstagramService {
  [x: string]: any;
  private instagram:Instagram;
  constructor(@InjectRepository(Instagram) private repo:Repository<InstagramEntity> ){
    this.instagram = new Instagram({
      clientId: '314643457795621',
      clientSecret: 'd465325c7079f7d6f9f75c5347df71ca',
      accessToken: 'AQAI_UuGqO03gYwB3WxjN7gu-t3yubV7xUHVVWTpU7vEYCq6SL6ux0wU9DRnwSm2TiGm5Hb8x_AhdBLWjVkiDH5WNcuGmjki9VdC9SuOW9q8-J8auUMp3QZUMxRVaHl5-Kh0WZaIqWAb2gscDRgfShhzwl7axocmjK_4LrkcvyO8K0FIYJacqeABVlLmO7X72SpH04tosQmrAOCFMmXE9O4wHhJLzQRq78qmGqbZmgR_Gg',
    })
  }
  
  create(createInstagramDto: CreateInstagramDto) {
        const post = this.repo.create()
    console.log( 'This action adds a new post');
    return this.repo.save(post)
  }

     


  async tokenAccess() {
    let first_facebook_access_token=await axios.get(`https://graph.facebook.com/v12.0/oauth/access_token?client_id=314643457795621&redirect_uri=https://locallhost:3000/redirect&client_secret=d465325c7079f7d6f9f75c5347df71ca&code=AQAGY554QxJeWknXrMFHisKX5ctWyPoNQbsugobYgv4A9lDMNscUe2xE5gef4hwaHryEOV7o25vn26lovFgYibU1j0OvGugRIFToJNAvQld1MLwn4tiW4uJ7O89qnacoh9mOj2tvzfe_PU8TbqTP5ansLoxSElzRBcNH0U3gbM9ksqs_M3PsYE-w7fI2MBMg147sAL5qfGJe2trxCedR1hoNtknzYhCw27ttNN2ZDttxVw`)
    console.log("first_facebook_access_token",first_facebook_access_token)
    // const first_facebook_access_token = Http::get("ent_secret=3f776bc9dced8da8f209ab70723f4ffd&code=" . $request->code);
    let response = axios.get(`https:///graph.facebook.com/v11.0/me/accounts?access_token=${first_facebook_access_token["access_token"]}`)
    // const page_id = json_decode($response)->data[0]->id;
    // response = axios.get(`https://graph.facebook.com/v11.0/${page_id}?fields=access_token&access_token= ${first_facebook_access_token['access_token']}`);

  }

  findOne(id:number):InstagramEntity{
    return this.repo.findOne({where:{id:id}});
  }

  async update(id: number, attrs:Partial<InstagramEntity>) {
    this.repo.update({id:id},attrs);
    const post = await this.findOne(id)
    if(!post)throw new Error('post not found')

    Object.assign(post,attrs)
    return this.repo.save(post)
  }


  async remove(id: number) {
    const post = await this.findOne(id)
    if(!post)throw new Error('post not found')

    return this.repo.remove(post)

  }
}
