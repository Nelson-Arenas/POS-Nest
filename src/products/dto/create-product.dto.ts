import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty({ message: 'Nombre no debe estar vacío' })
    @IsString({ message: 'Nombre debe ser una cadena de texto' })
    name: string;

    //image?: string;
    @IsString({ message: 'Descripción debe ser una cadena de texto' })
    description?: string;

    @IsNumber({maxDecimalPlaces: 2}, { message: 'Precio debe ser un número' })
    @IsNotEmpty({ message: 'Precio no debe estar vacío' })
    price: number;

    @IsNumber({ maxDecimalPlaces: 0 }, { message: 'Stock debe ser un número' })
    @IsNotEmpty({ message: 'Stock no debe estar vacío' })
    stock: number;
    
    @IsNumber({ maxDecimalPlaces: 0 }, { message: 'CategoryId debe ser un número' })
    @IsNotEmpty({ message: 'CategoryId no debe estar vacío' })
    categoryId: number;
}
