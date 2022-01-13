import { Module } from '@nestjs/common';
import { RevenueSubStreamService } from './revenue-sub-stream.service';
import { RevenueSubStreamController } from './revenue-sub-stream.controller';
import { RevenueSubStream } from './entities/revenue-sub-stream.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [RevenueSubStreamController],
  providers: [RevenueSubStreamService],
  imports: [
		TypeOrmModule.forFeature([RevenueSubStream]),
		ClientsModule.register([
			{ 
				name: 'REVENUE_SUB_STREAM_SERVICE',
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
export class RevenueSubStreamModule {}
