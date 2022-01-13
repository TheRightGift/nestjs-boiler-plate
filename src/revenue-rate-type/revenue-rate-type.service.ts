import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { CreateRevenueRateTypeDto } from './dto/create-revenue-rate-type.dto';
import { UpdateRevenueRateTypeDto } from './dto/update-revenue-rate-type.dto';
import { RevenueRateType } from './entities/revenue-rate-type.entity';

@Injectable()
export class RevenueRateTypeService extends AbstractService {
  constructor(
    @InjectRepository(RevenueRateType)
    private readonly revenueRateTypeRepo: Repository<RevenueRateType>,
  ) {
    super(revenueRateTypeRepo);
  }
}
