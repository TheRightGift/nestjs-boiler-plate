import { PartialType } from '@nestjs/swagger';
import { CreateRevenueRateTypeDto } from './create-revenue-rate-type.dto';

export class UpdateRevenueRateTypeDto extends PartialType(CreateRevenueRateTypeDto) {}
