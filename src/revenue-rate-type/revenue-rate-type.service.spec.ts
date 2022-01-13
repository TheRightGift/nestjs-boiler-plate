import { Test, TestingModule } from '@nestjs/testing';
import { RevenueRateTypeService } from './revenue-rate-type.service';

describe('RevenueRateTypeService', () => {
  let service: RevenueRateTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RevenueRateTypeService],
    }).compile();

    service = module.get<RevenueRateTypeService>(RevenueRateTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
