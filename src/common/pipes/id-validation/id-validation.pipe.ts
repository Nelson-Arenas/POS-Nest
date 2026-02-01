import {  BadRequestException, Injectable, ParseIntPipe, PipeTransform } from '@nestjs/common';

@Injectable()
export class IdValidationPipe extends ParseIntPipe {
  constructor() {
    super({
      errorHttpStatusCode: 400,
      exceptionFactory: (errors) => new BadRequestException('ID debe ser un número válido'),
    });
  }
}
