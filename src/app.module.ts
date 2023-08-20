import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { InstagramModule } from './instagram/instagram.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesModule } from './games/games.module';
import { Game } from './database/entities/game.entity';
import { Instagram } from './database/entities/instagram.entity';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'sqlite',
    database:'db.sqlite',
    entities:[Game ,Instagram],
    synchronize: true
    
  }), HomeModule, AboutUsModule, ContactUsModule, InstagramModule, GamesModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

