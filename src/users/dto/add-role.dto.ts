import {IsNumber, IsString} from "class-validator";

export class AddRoleDto{
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly userId: number
    @IsString({message: 'Должно быть строкой'})
    readonly value: string

}