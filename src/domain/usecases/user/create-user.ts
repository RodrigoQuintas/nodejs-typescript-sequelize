import { VisitantUser } from '../../../domain/entities/user/visitant-user';
import { User, Type, IUser } from '../../../domain/entities/user/user';
import { ValidationError } from '../../errors/validation-error';
import { AdminUser } from '../../../domain/entities/user/admin-user';
import { v4 as uuid } from 'uuid';

export interface CreateUserRepository {
  create(user: User): Promise<{ id: string }>;
}

export class CreateUserUseCase {
  constructor(private repository: CreateUserRepository) {}

  async create(args: Omit<IUser, 'id'>) {
    const user = this.getUserInstance({ ...args, id: uuid() });

    const { id } = await this.repository.create(user);

    return { id };
  }

  private getUserInstance(args: IUser): User {
    if (args.type === Type.admin) {
      return new AdminUser(args);
    } else if (args.type === Type.visitant) {
      return new VisitantUser(args);
    }

    throw new ValidationError('INVALID_ROLE');
  }
}
