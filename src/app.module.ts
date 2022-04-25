import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { LoginModule } from './auth/login/login.module';
import { UsersModule } from './admin/users/users.module';
import { IngredientsModule } from './admin/ingredients/ingredients.module';
import { PizzaModule } from './admin/pizza/pizza.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    "type": "mariadb",
    "host": "localhost",
    "port": 3306,
    "username": "admin",
    "password": "nimda",
    "database": "pizzeria",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
  }), LoginModule, UsersModule, IngredientsModule, PizzaModule

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
