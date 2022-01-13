import { Module } from '@nestjs/common';
import { MdasService } from './mdas.service';
import { MdasController } from './mdas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mda } from './entities/mda.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [MdasController],
  providers: [MdasService],
  imports: [
		TypeOrmModule.forFeature([Mda]),
		ClientsModule.register([
			{ 
				name: 'MDA_SERVICE',
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
export class MdasModule {}
