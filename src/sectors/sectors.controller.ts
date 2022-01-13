import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { SectorsService } from './sectors.service';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BaseController } from 'src/common/base.controller';
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@ApiTags('Sectors')
@ApiBearerAuth()
@Controller('sectors')
export class SectorsController extends BaseController {
  constructor(
    private readonly sectorsService: SectorsService,
    // Inject the MQ client
		@Inject('SECTORS_SERVICE') private readonly client: ClientProxy    
  ) {
    super();
  }

  @Post()
  create(@Body() createSectorDto: CreateSectorDto) {
    return this.sectorsService.create(createSectorDto);
  }

  @Get()
  findAll() {
    return this.sectorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSectorDto: UpdateSectorDto) {
    return this.sectorsService.update(+id, updateSectorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sectorsService.remove(+id);
  }

  // Listen for MQ broadcasts
	@EventPattern('allSectorsFromOtherMicroservices')
	async allSectors(data: string){
		console.log(data);		
	}
}
