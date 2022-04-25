import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'models/user.entity';
import { Bcrypt } from 'src/admin/users/bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  
  create(createUserDto: CreateUserDto): Promise<User> {
    const bcrypt = new Bcrypt()
    const password = bcrypt.setPassword(createUserDto.password)
    const newUser = this.usersRepository.create({...createUserDto, password })
    return this.usersRepository.save(newUser)
  }

  async findAll() {
    const response = await this.usersRepository.find()
    return response
  }

  async findOne(id: number) {
    const response = await this.usersRepository.findOne({ where:{ id: id } })
    return response
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const bcrypt = new Bcrypt()
    const password = bcrypt.setPassword(updateUserDto.password)
    return await this.usersRepository.update(id, {
      name: updateUserDto.name,
      firstname: updateUserDto.firstname,
      email: updateUserDto.email,
      adresse: updateUserDto.adresse,
      cp: updateUserDto.cp,
      ville: updateUserDto.ville,
      password: password
    })
  }

  async remove(id: number) {
    await this.usersRepository.delete(id)
  }
}
