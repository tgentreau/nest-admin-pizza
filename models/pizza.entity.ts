import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Ingredients } from './ingredients.entity';
import { User } from './user.entity';

@Entity()
export class Pizza {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    code: string;

    @Column({ nullable: false })
    name: string;

    @Column()
    libelle: string;

    @Column({ nullable: false })
    prix: number;

    @Column({ nullable: false })
    categorie: string;

    @Column({ nullable: false })
    version: number;

//    @ManyToOne(() => User, (user) => user.pizzas)
//    @JoinColumn({ name: "user_id" })
//    user: User

   @ManyToMany(() => Ingredients)
    @JoinTable()
    ingredients: Ingredients[]
}