import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {plainToInstance} from "class-transformer";
import {validate} from "class-validator";
import {ValidationException} from "../exceptions/validation.exception";


@Injectable()

export class ValidationPipe implements  PipeTransform<any>{
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        const obj = plainToInstance(metadata.metatype, value)
        const error = await validate(obj)

        if (error.length){
            console.log(error)
            let messages = error.map(err=> {
                return `Поле '${err.property}' - ${Object.values(err.constraints).join(', ')}`
            })
            throw new ValidationException(messages)
        }
        return value
    }
}