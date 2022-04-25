import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Menus {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;
}