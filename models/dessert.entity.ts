import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dessert {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;
}