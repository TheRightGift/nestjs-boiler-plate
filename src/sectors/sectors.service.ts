import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { Sector } from './entities/sector.entity';

@Injectable()
export class SectorsService extends AbstractService{
  constructor(
    @InjectRepository(Sector)
    private readonly sectorRepo: Repository<Sector>,
  ) {
    super(sectorRepo);
  }
}
