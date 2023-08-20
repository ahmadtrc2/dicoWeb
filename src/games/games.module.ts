import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Game } from '../database/entities/game.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Game])],
  controllers: [GamesController],
  providers: [GamesService]
})
export class GamesModule {}
