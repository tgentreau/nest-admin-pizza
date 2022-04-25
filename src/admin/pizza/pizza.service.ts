import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredients } from 'models/ingredients.entity';
import { Pizza } from 'models/pizza.entity';
import { Repository } from 'typeorm';
import { CreatePizzaDto } from './dto/create-pizza.dto';

@Injectable()
export class PizzaService {
  constructor(
    @InjectRepository(Pizza)
    private pizzaRepository: Repository<Pizza>,
    @InjectRepository(Ingredients)
    private ingredientRepository: Repository<Ingredients>
  ) {}

  async create(createPizzaDto: CreatePizzaDto) {
    const ingredients = await this.ingredientRepository.findByIds(createPizzaDto.ingredient)
    const version = parseInt(createPizzaDto.version)
    const res = this.pizzaRepository.create({...createPizzaDto, ingredients, version})
    const response = this.pizzaRepository.save(res)
    return response
  }

  async findAll() {
    const response = await this.pizzaRepository.find({
      relations: ["ingredients"]
  })
    return response
  }

  async findOne(id: number) {
    const response = await this.pizzaRepository.findOne({ 
      where:{ id: id },
      relations: ["ingredients"]
    })
    return response
  }

  async createUpdate(createPizzaDto: CreatePizzaDto) {
    const ingredients = await this.ingredientRepository.findByIds(createPizzaDto.ingredient)
    const version = parseInt(createPizzaDto.version)
    const updateVersion = version + 1
    const pizza = this.pizzaRepository.create({...createPizzaDto, ingredients, version: updateVersion })
    const response = await this.pizzaRepository.save(pizza)
    return response
  }

  async remove(id: number) {
    await this.pizzaRepository.delete(id)
  }
}
