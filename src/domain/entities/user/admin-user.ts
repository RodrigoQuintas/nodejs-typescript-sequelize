import { ValidationError } from '../../errors/validation-error';
import { IUser, User } from './user';

export class AdminUser extends User {
  private static MIN_PASSWORD_LENGTH = 10;

  constructor(user: IUser) {
    super(user);
    this.validatePassword(user.password);
  }

  protected validatePassword(password: string) {
    if (password.length < AdminUser.MIN_PASSWORD_LENGTH) {
      throw new ValidationError('INVALID_PASSWORD_LENGTH');
    }
  }
}
