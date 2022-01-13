import { Test, TestingModule } from '@nestjs/testing';
import { RevenueRateTypeController } from './revenue-rate-type.controller';
import { RevenueRateTypeService } from './revenue-rate-type.service';

describe('RevenueRateTypeController', () => {
  let controller: RevenueRateTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RevenueRateTypeController],
      providers: [RevenueRateTypeService],
    }).compile();

    controller = module.get<RevenueRateTypeController>(RevenueRateTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
