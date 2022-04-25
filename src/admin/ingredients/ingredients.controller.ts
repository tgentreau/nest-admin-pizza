import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Session } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Response } from 'express';
import { IngredientGateway } from './ingredients.gateway';

@Controller('admin/ingredient')
export class IngredientsController {
  constructor(
    private readonly ingredientsService: IngredientsService,
    private readonly gateway: IngredientGateway
  ) {}

  @Get('/add')
  add(@Session() session, @Res() resp: Response) {
    const id = session.userId
    resp.render('ingredientAdd', {
      current: id
    })
  }

  @Post("/add")
  create(@Body() createIngredientDto: CreateIngredientDto, @Res() resp: Response) {
    this.gateway.handleMessage(createIngredientDto)
    this.ingredientsService.create(createIngredientDto)
    resp.redirect('/admin/ingredient')
  }

  @Get()
  findAll(@Res() resp: Response) {
    this.ingredientsService.findAll()
      .then((data) => {
        resp.render('ingredient', { 
          data: data 
        })
      })
  }
 
  @Get('/edit/:id')
  findOne(@Param('id') id: string, @Res() resp: Response) {
    this.ingredientsService.findOne(+id)
      .then((res) => {
        resp.render('ingredientEdit', {
          data: res
        })
      })
  }

  @Post('/edit/:id')
  update(@Param('id') id: string, @Body() updateIngredientDto: UpdateIngredientDto, @Res() resp: Response) {
    this.ingredientsService.update(+id, updateIngredientDto);
    resp.redirect('/admin/ingredient')
  }

  @Get('/delete/:id')
  find(@Param('id') id: string, @Res() resp: Response) {
    this.ingredientsService.findOne(+id)
    .then((res) => {
      resp.render('ingredientDelete', {
        data: res
      })
    })
  }

  @Post('/delete/:id')
  remove(@Param('id') id: string, @Res() resp: Response) {
    this.ingredientsService.remove(+id)
    resp.redirect('/admin/ingredient')
  }
}

