import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { CreateRevenueTypeDto } from './dto/create-revenue-type.dto';
import { UpdateRevenueTypeDto } from './dto/update-revenue-type.dto';
import { RevenueType } from './entities/revenue-type.entity';

@Injectable()
export class RevenueTypeService extends AbstractService {
  constructor(
    @InjectRepository(RevenueType)
    private readonly revenueTypeRepo: Repository<RevenueType>,
  ) {
    super(revenueTypeRepo);
  }
}
