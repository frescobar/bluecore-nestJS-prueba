import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { User } from './interfaces/user.interface';


@Injectable()
export class UsersService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';

  async findAll(): Promise<User[]> {
    const response = await axios.get<User[]>(this.apiUrl);
    return response.data
  }
}

