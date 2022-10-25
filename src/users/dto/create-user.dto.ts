import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@email.com', description: 'Почта'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message:'Некорректный email'})
    readonly email: string

    @ApiProperty({example: 'hf21F_qg5[`gh~0~`]bd', description: 'Почта'})
    @IsString({message: 'Должно быть строкой'})
    @Length(4, 16, {message: 'Не меньше 4 и не больше 16'})
    readonly password: string
}