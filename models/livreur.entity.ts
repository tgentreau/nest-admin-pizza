import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Livreur {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}