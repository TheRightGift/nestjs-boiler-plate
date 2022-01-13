import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as connectionOptions from '../ormconfig';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from 'nest-router';
import { routes } from './routes';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './common/Exception-Filters/http-exception.filter';
import { ModelExceptionFilter } from './common/Exception-Filters/model-exception.filter';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { TestModule } from './test/test.module';
// import { ClientsModule, Transport } from '@nestjs/microservices';
import { SectorsModule } from './sectors/sectors.module';
import { SubSectorModule } from './sub-sector/sub-sector.module';
import { MdasModule } from './mdas/mdas.module';
import { AgenciesModule } from './agencies/agencies.module';
import { RevenueTypeModule } from './revenue-type/revenue-type.module';
import { RevenueStreamModule } from './revenue-stream/revenue-stream.module';
import { RevenueRateTypeModule } from './revenue-rate-type/revenue-rate-type.module';
import { RevenueSubStreamModule } from './revenue-sub-stream/revenue-sub-stream.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		// ClientsModule.register([
		// { 
		// 	name: 'MAIN_SERVICE', 
		// 	transport: Transport.RMQ,
		// 	options: {
		// 		urls: ['urlGoesHere'],
		// 		queue: 'queueGoesHere',
		// 		queueOptions: {
		// 			durable: false
		// 		}
		// 	}
		// },
			
		// ]),
		RouterModule.forRoutes(routes),
		ScheduleModule.forRoot(),
		TypeOrmModule.forRoot(connectionOptions),
		EventEmitterModule.forRoot({
			wildcard: true,
			delimiter: '.',
		}),
		TestModule,
		SectorsModule,
		SubSectorModule,
		MdasModule,
		AgenciesModule,
		RevenueTypeModule,
		RevenueStreamModule,
		RevenueRateTypeModule,
		RevenueSubStreamModule,
	],
	providers: [
		{
		provide: APP_FILTER,
		useClass: HttpExceptionFilter,
		},
		{
		provide: APP_FILTER,
		useClass: ModelExceptionFilter,
		},
	],
})
export class AppModule {}
