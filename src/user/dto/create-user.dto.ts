import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, Length } from "class-validator";


export class CreateUserDto {
    @ApiProperty({
        required: false,
    })
    @IsNotEmpty()
    readonly id: number;

    @ApiProperty({
        required: false,
    })
    @IsOptional()
    @Length(0, 20)
    readonly name: string;

    @ApiProperty({
        required: false,
    })
    @IsOptional()
    @Length(0, 20)
    readonly username: string;

    @ApiProperty({
        required: false,
    })
    @IsOptional()
    @Length(0, 20)
    readonly password: string;

    @ApiProperty({
        required: false,
    })
    @IsOptional()
    @Length(0, 100)
    readonly address: string;

    @ApiProperty({
        required: false,
    })
    @IsOptional()

    readonly mobile: number;

    @ApiProperty({
        required: false,
    })
    @IsOptional()
    @Length(0, 10)
    readonly gender: string;

    @ApiProperty({
        required: false,
    })
    @IsOptional()
    @Length(0, 20)
    readonly nationality: string;


}

export class LoginDto {

    @ApiProperty({
        required: false,
    })
    @IsNotEmpty()
    @Length(0, 20)
    readonly username: string;

    @ApiProperty({
        required: false,
    })
    @IsNotEmpty()
    @Length(0, 20)
    readonly password: string;
}
