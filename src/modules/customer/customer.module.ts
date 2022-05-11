import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { Neo4jModule } from '../neo4j/neo4j.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from '../../schemas/customer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }])
  ],
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule {}
