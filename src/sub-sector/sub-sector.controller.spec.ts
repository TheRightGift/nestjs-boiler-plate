import { Test, TestingModule } from '@nestjs/testing';
import { SubSectorController } from './sub-sector.controller';
import { SubSectorService } from './sub-sector.service';

describe('SubSectorController', () => {
  let controller: SubSectorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubSectorController],
      providers: [SubSectorService],
    }).compile();

    controller = module.get<SubSectorController>(SubSectorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
