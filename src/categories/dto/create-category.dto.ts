import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
    @IsString({message: 'Nombre debe ser una cadena de texto'})
    @IsNotEmpty({message: 'Nombre no debe estar vacío'})
    name: string;
}
