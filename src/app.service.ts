import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  private readonly accessToken = '00764f85d17847bf0089e28682057fb4';
  getHello(): string {
    return 'Hello World!';
  }

  async getMyPosts(): Promise<any> {
    const response = await axios.get(
      `http://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${this.accessToken}`);
    return response.data.data;
  }

}
