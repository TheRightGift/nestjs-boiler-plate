import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { RevenueRateTypeService } from './revenue-rate-type.service';
import { CreateRevenueRateTypeDto } from './dto/create-revenue-rate-type.dto';
import { UpdateRevenueRateTypeDto } from './dto/update-revenue-rate-type.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BaseController } from 'src/common/base.controller';
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@ApiTags('Revenue Rate Type')
@ApiBearerAuth()
@Controller('revenue-rate-type')
export class RevenueRateTypeController extends BaseController {
  constructor(
    private readonly revenueRateTypeService: RevenueRateTypeService,
    // Inject the MQ client
		@Inject('REVENUE_RATE_TYPE_SERVICE') private readonly client: ClientProxy 
  ) {
    super()
  }

  @Post()
  create(@Body() createRevenueRateTypeDto: CreateRevenueRateTypeDto) {
    return this.revenueRateTypeService.create(createRevenueRateTypeDto);
  }

  @Get()
  findAll() {
    return this.revenueRateTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.revenueRateTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRevenueRateTypeDto: UpdateRevenueRateTypeDto) {
    return this.revenueRateTypeService.update(+id, updateRevenueRateTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.revenueRateTypeService.remove(+id);
  }

  // Listen for MQ broadcasts
	@EventPattern('allRevenueRateTypesFromOtherMicroservices')
	async allRevenueRateTypes(data: string){
		console.log(data);		
	}
}
