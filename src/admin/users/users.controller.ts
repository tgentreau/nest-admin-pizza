import { Controller, Get, Post, Body, Param, Session, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { UserGateway } from './users.gateway';

@Controller('admin/users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly gateway: UserGateway
  ) {}

  @Get()
  root(@Session() session, @Res() resp: Response) {
    const id = session.userId
    this.usersService.findOne(+id)
      .then((res) => {
        if(res) {
          const actualUser = res.firstname
          this.usersService.findAll()
            .then((data) => {
              resp.render('users', {
                current: actualUser, 
                data: data 
              })
            })
        }
      })
  }

  @Get('/edit/:id')
  findOne(@Param('id') id: string, @Res() resp: Response) {
    this.usersService.findOne(+id)
      .then((res) => {
        resp.render('usersEdit', {
          data: res
        })
      })
  }

  @Post('/edit/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @Res() resp: Response) {
    this.usersService.update(+id, updateUserDto);
    resp.redirect('/admin/users')
  }

  @Get('/delete/:id')
  find(@Param('id') id: string, @Res() resp: Response) {
    this.usersService.findOne(+id)
      .then((res) => {
        resp.render('usersDelete', {
          data: res
        })
      })
  }

  @Post('/delete/:id')
  remove(@Param('id') id: string, @Res() resp: Response) {
    this.usersService.remove(+id)
    resp.redirect('/admin/users')
  }

  @Get('/add')
  add(@Res() resp: Response) {
    resp.render('userAdd')
  }

  @Post('/add')
  create(@Body() createUserDto: CreateUserDto, @Res() resp: Response) {
    this.gateway.handleMessage(createUserDto)
    this.usersService.create(createUserDto)
    resp.redirect('/admin/users')
  }
}
