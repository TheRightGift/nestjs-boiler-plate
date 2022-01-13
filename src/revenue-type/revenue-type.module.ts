import { Module } from '@nestjs/common';
import { RevenueTypeService } from './revenue-type.service';
import { RevenueTypeController } from './revenue-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RevenueType } from './entities/revenue-type.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  	controllers: [RevenueTypeController],
  	providers: [RevenueTypeService],
	imports: [
		TypeOrmModule.forFeature([RevenueType]),
		ClientsModule.register([
			{ 
				name: 'REVENUE_TYPE_SERVICE',
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
export class RevenueTypeModule {}
