import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Commande {
    @PrimaryGeneratedColumn()
    id: number;
}