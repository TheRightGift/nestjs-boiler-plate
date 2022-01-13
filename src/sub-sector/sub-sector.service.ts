import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { CreateSubSectorDto } from './dto/create-sub-sector.dto';
import { UpdateSubSectorDto } from './dto/update-sub-sector.dto';
import { SubSector } from './entities/sub-sector.entity';

@Injectable()
export class SubSectorService extends AbstractService {
  constructor(
    @InjectRepository(SubSector)
    private readonly subSectorRepo: Repository<SubSector>,
  ) {
    super(subSectorRepo);
  }
}
