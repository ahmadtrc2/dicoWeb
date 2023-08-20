import { Test, TestingModule } from '@nestjs/testing';
import { GamesService } from './games.service';
import { async } from 'rxjs';

describe('GamesService', () => {
  let service: GamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GamesService],
    }).compile();

    service = module.get<GamesService>(GamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it('should be create a Game', async() => {
    const game = await service.create({
      "id":3,
      "name":"Yatzy",
      "description":" tcfvygbjnkml,;l  :)",
      "images":"zaxcvbnmoptygi7"
  });
    expect(service.findOne(3)).not.toBeNull();
  });

  it('should be finde', async() => {
    const game = await service.findOne(3)

    expect((await service.findOne(3))).not.toBeNull();
  });

  it('should be Update', async() => {
    const game = await service.update(3,{"name":"gem punk"})

    expect((await service.findOne(3)).name).toBe("gem punk");
  });
  
  it('should be remove', async() => {
    const game = await service.remove(3)

    expect((await service.findOne(3))).toBeNull();
  });

});
