import { Test, TestingModule } from '@nestjs/testing';
import { MdasService } from './mdas.service';

describe('MdasService', () => {
  let service: MdasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MdasService],
    }).compile();

    service = module.get<MdasService>(MdasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
