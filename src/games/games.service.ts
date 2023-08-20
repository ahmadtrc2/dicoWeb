import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from 'src/database/entities/game.entity';

@Injectable()
export class GamesService { 

  constructor(@InjectRepository(Game) private repo:Repository<Game> ){
  }

  create(createGameDto: CreateGameDto) {
    const game = this.repo.create(createGameDto)
    console.log( 'This action adds a new game');
    return this.repo.save(game)
  }

  findByName(name :string) {
    return this.repo.find({where:{name:name}})
  }

  findOne(id:number) {
    return this.repo.findOne({where:{id:id}} );
  }

  async update(id: number, attrs:Partial<Game>) {
    const game = await this.findOne(id)
    if(!game)throw new Error('user not found')

    Object.assign(game,attrs)
    return this.repo.save(game)
  } 

  async remove(id: number) {
    const game = await this.findOne(id)
    if(!game)throw new Error('user not found')

    return this.repo.remove(game)

  }
}
function where(id: number): import("typeorm").FindOneOptions<Game> {
  throw new Error('Function not implemented.');
}

