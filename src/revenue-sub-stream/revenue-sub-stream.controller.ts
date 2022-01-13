import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { RevenueSubStreamService } from './revenue-sub-stream.service';
import { CreateRevenueSubStreamDto } from './dto/create-revenue-sub-stream.dto';
import { UpdateRevenueSubStreamDto } from './dto/update-revenue-sub-stream.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BaseController } from 'src/common/base.controller';
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@ApiTags('Revenue Sub Stream')
@ApiBearerAuth()
@Controller('revenue-sub-stream')
export class RevenueSubStreamController extends BaseController {
  constructor(
    private readonly revenueSubStreamService: RevenueSubStreamService,
    // Inject the MQ client
		@Inject('REVENUE_SUB_STREAM_SERVICE') private readonly client: ClientProxy
  ) {
    super()
  }

  @Post()
  create(@Body() createRevenueSubStreamDto: CreateRevenueSubStreamDto) {
    return this.revenueSubStreamService.create(createRevenueSubStreamDto);
  }

  @Get()
  findAll() {
    return this.revenueSubStreamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.revenueSubStreamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRevenueSubStreamDto: UpdateRevenueSubStreamDto) {
    return this.revenueSubStreamService.update(+id, updateRevenueSubStreamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.revenueSubStreamService.remove(+id);
  }

  // Listen for MQ broadcasts
	@EventPattern('allRevenueSubStreamsFromOtherMicroservices')
	async allRevenueSubStreams(data: string){
		console.log(data);		
	}
}
