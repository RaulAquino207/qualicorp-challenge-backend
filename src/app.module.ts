import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Neo4jModule } from './modules/neo4j/neo4j.module';
import { CustomerModule } from './modules/customer/customer.module';
import { DATABASE_CONFIG } from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    Neo4jModule.forRoot(DATABASE_CONFIG), 
    CustomerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
