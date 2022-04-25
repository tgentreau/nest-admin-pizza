import { Controller, Get, Post, Body, Res, Param } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { Response } from 'express';
import { IngredientsService } from '../ingredients/ingredients.service';
import { PizzaGateway } from './pizza.gateway';

@Controller('admin/pizza')
export class PizzaController {
  constructor(
    private readonly pizzaService: PizzaService,
    private readonly ingredientService: IngredientsService,
    private readonly gateway: PizzaGateway
  ) {}

  @Get('/add')
  add(@Res() resp: Response) {
    this.ingredientService.findAll()
      .then((res) => {
        resp.render('pizzaAdd', {
          data: res
        })
      })
  }

  @Post('/add')
  async create(@Res() resp: Response, @Body() createPizzaDto: CreatePizzaDto) {
    this.gateway.handleMessage(createPizzaDto)
    await this.pizzaService.create(createPizzaDto)
    resp.redirect('/admin/pizza')
  }

  @Get()
  findAll(@Res() resp: Response) {
    this.pizzaService.findAll()
      .then((res) => {
        resp.render('pizza', {
          data: res,     
        })
      })
  }

  @Get('/edit/:id')
  findOne(@Param('id') id: string, @Res() resp: Response) {
    this.pizzaService.findOne(+id)
    .then((res) => {
      this.ingredientService.findAll()
      .then((ingr) => {
        resp.render('pizzaEdit', {
          data: res,
          ingr: ingr
        })
      })
    })
  }

  @Post('/edit/:id')
  update(@Param('id') id: string, @Body() createPizzaDto: CreatePizzaDto, @Res() resp: Response) {
    this.pizzaService.createUpdate(createPizzaDto)
    resp.redirect('/admin/pizza')
  }

  @Get('/delete/:id')
  find(@Param('id') id: string, @Res() resp: Response) {
    this.pizzaService.findOne(+id)
      .then((res) => {
        resp.render('pizzaDelete', {
          data: res
        })
      })
  }

  @Post('/delete/:id')
  remove(@Param('id') id: string, @Res() resp: Response) {
    this.pizzaService.remove(+id)
    resp.redirect('/admin/pizza')
  }
}
