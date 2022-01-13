import { Module } from '@nestjs/common';
import { SectorsService } from './sectors.service';
import { SectorsController } from './sectors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sector } from './entities/sector.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
	controllers: [SectorsController],
	providers: [SectorsService],
	imports: [
		TypeOrmModule.forFeature([Sector]),
		ClientsModule.register([
			{ 
				name: 'SECTORS_SERVICE',
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
export class SectorsModule {}
