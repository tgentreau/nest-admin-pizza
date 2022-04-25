import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { Ingredients } from 'models/ingredients.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientGateway } from './ingredients.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredients])],
  controllers: [IngredientsController],
  providers: [IngredientsService, IngredientGateway]
})
export class IngredientsModule {}
