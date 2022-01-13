import { Test, TestingModule } from '@nestjs/testing';
import { MdasController } from './mdas.controller';
import { MdasService } from './mdas.service';

describe('MdasController', () => {
  let controller: MdasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MdasController],
      providers: [MdasService],
    }).compile();

    controller = module.get<MdasController>(MdasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
