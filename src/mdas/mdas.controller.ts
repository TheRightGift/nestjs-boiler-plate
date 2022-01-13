import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { MdasService } from './mdas.service';
import { CreateMdaDto } from './dto/create-mda.dto';
import { UpdateMdaDto } from './dto/update-mda.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { BaseController } from 'src/common/base.controller';

@ApiTags('MDA')
@ApiBearerAuth()
@Controller('mdas')
export class MdasController extends BaseController {
  constructor(
    private readonly mdasService: MdasService,
    // Inject the MQ client
		@Inject('MDA_SERVICE') private readonly client: ClientProxy  
  ) {
    super()
  }

  @Post()
  create(@Body() createMdaDto: CreateMdaDto) {
    return this.mdasService.create(createMdaDto);
  }

  @Get()
  findAll() {
    return this.mdasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mdasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMdaDto: UpdateMdaDto) {
    return this.mdasService.update(+id, updateMdaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mdasService.remove(+id);
  }

  // Listen for MQ broadcasts
	@EventPattern('allMdaFromOtherMicroservices')
	async allMda(data: string){
		console.log(data);		
	}
}
