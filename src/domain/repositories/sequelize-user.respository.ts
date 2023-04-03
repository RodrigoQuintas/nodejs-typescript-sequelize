import { SequelizeUser } from '../../infrastructure/database/models/user.model';
import { User } from '../entities/user/user';
import { CreateUserRepository } from '../usecases/user/create-user';

export class SequelizeUserRepository implements CreateUserRepository {
  async create(user: User): Promise<{ id: string }> {
    console.log('SequelizeUserRepository');
    const created = await SequelizeUser.create({
      email: user.getEmail(),
      password: user.getPassword(),
      id: user.getId(),
      name: user.getName(),
      type: user.getType(),
    });

    return {
      id: created.id,
    };
  }
}
