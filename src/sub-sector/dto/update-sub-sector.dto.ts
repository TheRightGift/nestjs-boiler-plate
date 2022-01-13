import { PartialType } from '@nestjs/swagger';
import { CreateSubSectorDto } from './create-sub-sector.dto';

export class UpdateSubSectorDto extends PartialType(CreateSubSectorDto) {}
