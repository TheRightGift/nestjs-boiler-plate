import { Test, TestingModule } from '@nestjs/testing';
import { RevenueSubStreamController } from './revenue-sub-stream.controller';
import { RevenueSubStreamService } from './revenue-sub-stream.service';

describe('RevenueSubStreamController', () => {
  let controller: RevenueSubStreamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RevenueSubStreamController],
      providers: [RevenueSubStreamService],
    }).compile();

    controller = module.get<RevenueSubStreamController>(RevenueSubStreamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
