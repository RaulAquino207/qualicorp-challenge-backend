import { Document } from "mongoose";

export class Customer extends Document {
    cpf: string;
    name: string;
    email: string;
    phone: string;
}