import { PartialType } from '@nestjs/swagger';
import { CreateRevenueSubStreamDto } from './create-revenue-sub-stream.dto';

export class UpdateRevenueSubStreamDto extends PartialType(CreateRevenueSubStreamDto) {}
