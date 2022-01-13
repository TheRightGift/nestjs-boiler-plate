import { Test, TestingModule } from '@nestjs/testing';
import { SubSectorService } from './sub-sector.service';

describe('SubSectorService', () => {
  let service: SubSectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubSectorService],
    }).compile();

    service = module.get<SubSectorService>(SubSectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
