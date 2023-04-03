import { ValidationError } from '../../domain/errors/validation-error';
import { CreateUserUseCase } from '../../domain/usecases/user/create-user';
import {
  IController,
  IRequest,
  IResponse,
} from '../adapters/controller.interface';

export class CreateUserController implements IController {
  constructor(private service: CreateUserUseCase) {}

  async handle(req: IRequest): Promise<IResponse> {
    const { email, password, name, type } = req.payload;

    try {
      const { id } = await this.service.create({ email, password, name, type });

      return {
        status: 201,
        payload: {
          id,
        },
      };
    } catch (err) {
      if (err instanceof ValidationError) {
        return {
          status: 400,
          payload: {
            error: { error: err.message },
          },
        };
      }

      return {
        status: 500,
        payload: {
          error: 'INTERVAL_SERVER_ERROR',
        },
      };
    }
  }
}
