import { ValidationError } from '../../errors/validation-error';

export enum Type {
  visitant = 'visitant',
  admin = 'admin',
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  type: Type;
}

export abstract class User {
  private static EMAIL_REGEX =
    /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

  private id: string;
  private name: string;
  private email: string;
  private password: string;
  private type: Type;

  constructor(user: IUser) {
    const { email } = user;
    this.validateEmail(email);

    Object.assign(this, user);
  }

  private validateEmail(email: string) {
    const isValid = User.EMAIL_REGEX.test(email);

    if (!isValid) {
      throw new ValidationError('INVALID_EMAIL');
    }
  }

  protected abstract validatePassword(password: string): void;

  getId(): string {
    return this.id;
  }

  getEmail(): string {
    return this.email;
  }

  getName(): string {
    return this.name;
  }

  getPassword(): string {
    return this.password;
  }

  getType(): Type {
    return this.type;
  }
}
