import { Module } from '@nestjs/common';
import { AgenciesService } from './agencies.service';
import { AgenciesController } from './agencies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Agency } from './entities/agency.entity';

@Module({
  controllers: [AgenciesController],
  providers: [AgenciesService],
  imports: [
		TypeOrmModule.forFeature([Agency]),
		ClientsModule.register([
			{ 
				name: 'AGENCY_SERVICE',
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
export class AgenciesModule {}
