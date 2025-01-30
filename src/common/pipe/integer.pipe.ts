import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class IntegerPipe implements PipeTransform{
    transform(value: any) {
        const num=Number(value);
        if(isNaN(num))
        throw new BadRequestException({
            "message": "Validation failed (numeric string is expected)",
            "error": "Bad Request",
            "statusCode": 400
        })
    }
}