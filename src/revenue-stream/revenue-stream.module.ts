import { Module } from '@nestjs/common';
import { RevenueStreamService } from './revenue-stream.service';
import { RevenueStreamController } from './revenue-stream.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RevenueStream } from './entities/revenue-stream.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [RevenueStreamController],
  providers: [RevenueStreamService],
  imports: [
		TypeOrmModule.forFeature([RevenueStream]),
		ClientsModule.register([
			{ 
				name: 'REVENUE_STREAM_SERVICE',
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
export class RevenueStreamModule {}
