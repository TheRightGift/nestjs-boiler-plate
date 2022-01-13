import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { RevenueTypeService } from './revenue-type.service';
import { CreateRevenueTypeDto } from './dto/create-revenue-type.dto';
import { UpdateRevenueTypeDto } from './dto/update-revenue-type.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BaseController } from 'src/common/base.controller';
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@ApiTags('Revenue Type')
@ApiBearerAuth()
@Controller('revenue-type')
export class RevenueTypeController extends BaseController {
  constructor(
    private readonly revenueTypeService: RevenueTypeService,
    // Inject the MQ client
		@Inject('REVENUE_TYPE_SERVICE') private readonly client: ClientProxy 
  ) {
    super()
  }

  @Post()
  create(@Body() createRevenueTypeDto: CreateRevenueTypeDto) {
    return this.revenueTypeService.create(createRevenueTypeDto);
  }

  @Get()
  findAll() {
    return this.revenueTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.revenueTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRevenueTypeDto: UpdateRevenueTypeDto) {
    return this.revenueTypeService.update(+id, updateRevenueTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.revenueTypeService.remove(+id);
  }

  // Listen for MQ broadcasts
	@EventPattern('allRevenueTypesFromOtherMicroservices')
	async allRevenueTypes(data: string){
		console.log(data);		
	}
}
