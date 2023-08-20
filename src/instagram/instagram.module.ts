import { Module } from '@nestjs/common';
import { InstagramService } from './instagram.service';
import { InstagramController } from './instagram.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instagram } from './entities/instagram.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Instagram])],
  controllers: [InstagramController],
  providers: [InstagramService]
})
export class InstagramModule {}
