import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { CreateMdaDto } from './dto/create-mda.dto';
import { UpdateMdaDto } from './dto/update-mda.dto';
import { Mda } from './entities/mda.entity';

@Injectable()
export class MdasService extends AbstractService {
  constructor(
    @InjectRepository(Mda)
    private readonly mdaRepo: Repository<Mda>,
  ) {
    super(mdaRepo);
  }
}
