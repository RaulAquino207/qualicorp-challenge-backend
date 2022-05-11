import { ApiProperty } from "@nestjs/swagger";

export class CustomerDto {
    @ApiProperty({ example: '11122233344' })
    cpf: String;

    @ApiProperty({ example: 'Raul Aquino' })
    name: String;

    @ApiProperty({ example: 'raul@email.com' })
    email: String;

    @ApiProperty({ example: '85988720964' })
    phone: String;
}
