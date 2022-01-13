import { Module } from '@nestjs/common';
import { SubSectorService } from './sub-sector.service';
import { SubSectorController } from './sub-sector.controller';
import { SubSector } from './entities/sub-sector.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  	controllers: [SubSectorController],
  	providers: [SubSectorService],
  	imports: [
		TypeOrmModule.forFeature([SubSector]),
		ClientsModule.register([
			{ 
				name: 'SUB_SECTORS_SERVICE',
				transport: Transport.RMQ,
				options: {
					urls: ['urlGoesHere'],
					queue: 'queueGoesHere',
					queueOptions: {
						durable: false
					}
				}
			},
				
		]),
	]
})
export class SubSectorModule {}
