import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { CreateRevenueStreamDto } from './dto/create-revenue-stream.dto';
import { UpdateRevenueStreamDto } from './dto/update-revenue-stream.dto';
import { RevenueStream } from './entities/revenue-stream.entity';

@Injectable()
export class RevenueStreamService extends AbstractService {
  constructor(
    @InjectRepository(RevenueStream)
    private readonly revenueStreamRepo: Repository<RevenueStream>,
  ) {
    super(revenueStreamRepo);
  }
}
