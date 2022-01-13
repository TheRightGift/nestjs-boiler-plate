import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { RevenueStreamService } from './revenue-stream.service';
import { CreateRevenueStreamDto } from './dto/create-revenue-stream.dto';
import { UpdateRevenueStreamDto } from './dto/update-revenue-stream.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BaseController } from 'src/common/base.controller';
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@ApiTags('Revenue Stream')
@ApiBearerAuth()
@Controller('revenue-stream')
export class RevenueStreamController extends BaseController {
  constructor(
    private readonly revenueStreamService: RevenueStreamService,
    // Inject the MQ client
		@Inject('REVENUE_STREAM_SERVICE') private readonly client: ClientProxy  
  ) {
    super()
  }

  @Post()
  create(@Body() createRevenueStreamDto: CreateRevenueStreamDto) {
    return this.revenueStreamService.create(createRevenueStreamDto);
  }

  @Get()
  findAll() {
    return this.revenueStreamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.revenueStreamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRevenueStreamDto: UpdateRevenueStreamDto) {
    return this.revenueStreamService.update(+id, updateRevenueStreamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.revenueStreamService.remove(+id);
  }

  // Listen for MQ broadcasts
	@EventPattern('allRevenueStreamsFromOtherMicroservices')
	async allRevenueStreams(data: string){
		console.log(data);		
	}
}
