import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | null> { // Cambiado a User | null
    // Usamos el QueryBuilder para seleccionar explícitamente la contraseña
    return this.usersRepository
      .createQueryBuilder('user')
      .where('user.username = :username', { username })
      .addSelect('user.password')
      .getOne();
  }

  async create(userData: Partial<User>): Promise<User> {
    const newUser = this.usersRepository.create(userData);
    return this.usersRepository.save(newUser);
  }
}
