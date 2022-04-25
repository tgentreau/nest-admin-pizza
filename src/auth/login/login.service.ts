import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'models/user.entity';
import { Repository } from 'typeorm';
import { Bcrypt } from '../../admin/users/bcrypt';
import { CheckLoginDto } from './dto/create-login.dto';


@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

    async findOne(checkLoginDto : CheckLoginDto) {
        const response = await this.usersRepository.find({where :{ email:checkLoginDto.email }})
            if(response[0]) {
                const bcrypt = new Bcrypt()
                const matched = bcrypt.comparePassword(checkLoginDto.password, response[0].password)
                if(matched) {            
                    return response[0]
                } else {
                    return false
                }
            } else {
                return false
            }
                      
    }
}
