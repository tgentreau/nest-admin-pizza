import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Ingredients } from './ingredients.entity';
import { Pizza } from './pizza.entity';



@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false })
    firstname: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    adresse: string;

    @Column({ nullable: false })
    cp: number;

    @Column({ nullable: false })
    ville: string;

    @Column({ nullable: false })
    password: string;
}