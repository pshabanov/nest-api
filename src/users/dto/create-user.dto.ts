import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'user@email.com', description: 'Почта'})
    readonly email: string

    @ApiProperty({example: 'hf21F_qg5[`gh~0~`]bd', description: 'Почта'})
    readonly password: string
}