import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    name: string
    firstname: string
    email: string
    adresse: string
    cp: number
    ville: string
    password: string
}
