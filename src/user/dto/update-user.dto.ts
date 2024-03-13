import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, Length } from "class-validator";


export class UpdateCartDto {
    @ApiProperty({
        required: false,
    })
    @IsOptional()
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
    @IsOptional()
    quantity: number;

    @ApiProperty({
        required: false,
    })
    @IsOptional()
    price: number;

    


}
