import { Test, TestingModule } from '@nestjs/testing';
import { RevenueSubStreamService } from './revenue-sub-stream.service';

describe('RevenueSubStreamService', () => {
  let service: RevenueSubStreamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RevenueSubStreamService],
    }).compile();

    service = module.get<RevenueSubStreamService>(RevenueSubStreamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
