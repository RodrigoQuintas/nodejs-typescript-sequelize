import { User } from '../entities/user/user';
import { CreateUserRepository } from '../usecases/user/create-user';

const users: User[] = [];

export class InMemoryCreateUserRepository implements CreateUserRepository {
  async create(user: User): Promise<{ id: string }> {
    users.push(user);
    console.log(user);
    return {
      id: user.getId(),
    };
  }
}
