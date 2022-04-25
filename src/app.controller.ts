import { Controller, Get, Redirect, Req, Res, Session} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('/login')
  redirect() {
    
  }

  @Get('/logout')
  logout(@Res() res: Response, @Session() session){
    console.log(session);
    
    session.
    res.redirect('/login')
  }
}
