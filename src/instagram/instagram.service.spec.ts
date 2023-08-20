import { Test, TestingModule } from '@nestjs/testing';
import { InstagramService } from './instagram.service';

describe('InstagramService', () => {
  let service: InstagramService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstagramService],
    }).compile();

    service = module.get<InstagramService>(InstagramService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be create a Game', async() => {
    const game = await service.create({
      "id": 1,
      "caption": "jojome shode ghom ghome",
      "images": "zaxcvbnmoptygi7",
      createdAt: '',
      updatedAt: ''
    });
    expect(service.findOne(1)).not.toBeNull();
  });

  it('should be finde', async() => {
    const game = await service.findOne(1)

    expect((await service.findOne(1))).not.toBeNull();
  });

  it('should be Update', async() => {
    const game = await service.update(1,{caption:"gangim"})

    expect((await service.findOne(3))).toBe("gangim");
  });
  
  it('should be remove', async() => {
    const game = await service.remove(1)

    expect((await service.findOne(1))).toBeNull();
  });
});
