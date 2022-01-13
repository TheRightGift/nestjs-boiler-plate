import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { CreateRevenueSubStreamDto } from './dto/create-revenue-sub-stream.dto';
import { UpdateRevenueSubStreamDto } from './dto/update-revenue-sub-stream.dto';
import { RevenueSubStream } from './entities/revenue-sub-stream.entity';

@Injectable()
export class RevenueSubStreamService extends AbstractService {
  constructor(
    @InjectRepository(RevenueSubStream)
    private readonly revenueSubStreamRepo: Repository<RevenueSubStream>,
  ) {
    super(revenueSubStreamRepo);
  }
}
