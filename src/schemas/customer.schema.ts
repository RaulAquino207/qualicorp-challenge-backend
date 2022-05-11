import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
    cpf: String,
    name: String,
    email: String,
    phone: String
})
