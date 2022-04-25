import { Controller, Get, Post, Body, Render, Res, Session } from '@nestjs/common';
import { LoginService } from './login.service';
import { CheckLoginDto } from './dto/create-login.dto';
import { Response } from 'express';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  @Render('login')
  root(){
    return { title: "Se connecter"}
  }


  @Post()
  login(@Body() checkLoginDto: CheckLoginDto, @Res() res: Response, @Session() session) {
    this.loginService.findOne(checkLoginDto)
    .then((resp) => {
      if(resp === false) {
        res.redirect('/login')
      } else {
        const id = resp.id
        session.userId = id
        res.redirect('/admin/users')     
      }
    })
  }

}
