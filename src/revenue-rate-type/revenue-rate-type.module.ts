import { Module } from '@nestjs/common';
import { RevenueRateTypeService } from './revenue-rate-type.service';
import { RevenueRateTypeController } from './revenue-rate-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RevenueRateType } from './entities/revenue-rate-type.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [RevenueRateTypeController],
  providers: [RevenueRateTypeService],
	imports: [
		TypeOrmModule.forFeature([RevenueRateType]),
		ClientsModule.register([
			{ 
				name: 'REVENUE_RATE_TYPE_SERVICE',
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
export class RevenueRateTypeModule {}
