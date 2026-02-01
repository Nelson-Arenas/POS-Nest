import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
        @IsString({message: 'Nombre debe ser una cadena de texto'})
        @IsNotEmpty({message: 'Nombre no debe estar vacío'})
        name: string;
}
