import { Module } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { PizzaController } from './pizza.controller';
import { Pizza } from 'models/pizza.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientsService } from '../ingredients/ingredients.service';
import { Ingredients } from 'models/ingredients.entity';
import { PizzaGateway } from './pizza.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Pizza]), TypeOrmModule.forFeature([Ingredients])],
  controllers: [PizzaController],
  providers: [PizzaService, IngredientsService, PizzaGateway]
})
export class PizzaModule {}
