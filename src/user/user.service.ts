import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, type UpdateResult } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): User {
    return this.usersRepository.create(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(username: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ username });
  }

  update(username: string, updateUserDto: UpdateUserDto): Promise<UpdateResult>  {
    return this.usersRepository.update({ username }, updateUserDto);
  }

  async remove(username: string): Promise<void> {
    await this.usersRepository.delete({ username });
  }
}
