import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { SubSectorService } from './sub-sector.service';
import { CreateSubSectorDto } from './dto/create-sub-sector.dto';
import { UpdateSubSectorDto } from './dto/update-sub-sector.dto';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BaseController } from 'src/common/base.controller';

@ApiTags('Sub Sectors')
@ApiBearerAuth()
@Controller('sub-sector')
export class SubSectorController extends BaseController {
  constructor(
    private readonly subSectorService: SubSectorService,
    // Inject the MQ client
		@Inject('SUB_SECTORS_SERVICE') private readonly client: ClientProxy     
  ) { 
    super()
  }

  @Post()
  create(@Body() createSubSectorDto: CreateSubSectorDto) {
    return this.subSectorService.create(createSubSectorDto);
  }

  @Get()
  findAll() {
    return this.subSectorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subSectorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubSectorDto: UpdateSubSectorDto) {
    return this.subSectorService.update(+id, updateSubSectorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subSectorService.remove(+id);
  }

  // Listen for MQ broadcasts
	@EventPattern('allSubSectorsFromOtherMicroservices')
	async allSubSectors(data: string){
		console.log(data);		
	}
}
