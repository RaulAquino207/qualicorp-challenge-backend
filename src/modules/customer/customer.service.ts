import { Injectable } from '@nestjs/common';
import { Neo4jService } from '../neo4j/neo4j.service';
import { CustomerDto } from './dto/create-customer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './customer';

@Injectable()
export class CustomerService {

  constructor(
    @InjectModel('Customer')
    private readonly customerModel: Model<Customer>
  ){}

  async create(createCustomerDto: CustomerDto) {
    const customer = new this.customerModel(createCustomerDto);
    return await customer.save();
  }

  async findAll() {
    return await this.customerModel.find().exec();
  }

  async findOne(id: number) {
    return await this.customerModel.findById(id).exec();
  }

  async update(id: number, updateCustomerDto: CustomerDto) {
    await this.customerModel.updateOne({ _id : id }, updateCustomerDto).exec();
    return this.findOne(id);
  }

  remove(id: number) {
    return this.customerModel.deleteOne({ _id : id }).exec();
  }
}
