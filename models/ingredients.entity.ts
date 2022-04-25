import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Ingredients {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}