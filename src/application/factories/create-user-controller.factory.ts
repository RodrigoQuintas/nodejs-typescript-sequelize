import { InMemoryCreateUserRepository } from '../../domain/repositories/in-memory-create-user-repository';
import { CreateUserUseCase } from '../../domain/usecases/user/create-user';
import { CreateUserController } from '../../infrastructure/adapters/controller/create-user.controller';

export class CreateUserControllerFactory {
  static make() {
    const repository = new InMemoryCreateUserRepository();
    const service = new CreateUserUseCase(repository);
    const controller = new CreateUserController(service);

    return controller;
  }
}
