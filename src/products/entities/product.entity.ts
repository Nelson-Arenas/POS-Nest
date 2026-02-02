import { Category } from 'src/categories/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 60})
    name: string;

    @Column({type: 'varchar', length: 255, nullable: true, default: 'default.svg'})
    image: string;

    @Column({type: 'text', nullable: true})
    description: string;

    @Column({type: 'float', default: 0})
    price: number;

    @Column({type: 'int', default: 0})
    stock: number;

    @ManyToOne(() => Category, (category) => category.products, {eager: true} )
    category: Category;
}
