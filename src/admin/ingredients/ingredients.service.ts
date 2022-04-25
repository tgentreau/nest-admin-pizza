import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredients } from 'models/ingredients.entity';
import { Repository } from 'typeorm';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredients)
    private ingredientRepository: Repository<Ingredients>,
  ) {}

  async create(createIngredientDto: CreateIngredientDto) {
    const response = await this.ingredientRepository.save(createIngredientDto)
    return response
  }

  async findAll() {
    const response = await this.ingredientRepository.find()
    return response
  }

  async findOne(id: number) {
    const response = await this.ingredientRepository.findOne({ where:{ id: id } })
    return response
  }

  async update(id: number, updateIngredientDto: UpdateIngredientDto) {
    const response = await this.ingredientRepository.update(id, {
      name: updateIngredientDto.name
    })
    return response
  }

  async remove(id: number) {
    await this.ingredientRepository.delete(id)
  }
}
