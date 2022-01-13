import { PartialType } from '@nestjs/swagger';
import { CreateRevenueTypeDto } from './create-revenue-type.dto';

export class UpdateRevenueTypeDto extends PartialType(CreateRevenueTypeDto) {}
