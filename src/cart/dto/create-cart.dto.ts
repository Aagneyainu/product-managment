import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

export class CreateCartDto {
    @ApiProperty({
        required: false,
    })
    @IsNotEmpty()
    product_id: number;

    @ApiProperty({
        required: false,
    })
    @IsNotEmpty()
    @Length(0, 20)
    readonly token: string;

    @ApiProperty({
        required: false,
    })
    @IsNotEmpty()
    quantity: number;

    @ApiProperty({
        required: false,
    })
    @IsNotEmpty()
    price: number;

    


}