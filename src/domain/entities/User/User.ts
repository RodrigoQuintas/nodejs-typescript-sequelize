import { ValidationError } from '../../errors/ValidationError';

export enum Type {
  visitant = 'visitant',
  admin = 'admin',
}

interface UserConstructorArgs {
  email: string;
  name: string;
  type: Type;
}

export abstract class User {
  private static EMAIL_REGEX =
    /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

  private name: string;
  private email: string;
  private type: Type;

  constructor(args: UserConstructorArgs) {
    const { email } = args;
    this.validateEmail(email);

    Object.assign(this, args);
  }

  private validateEmail(email: string) {
    const isValid = User.EMAIL_REGEX.test(email);

    if (!isValid) {
      throw new ValidationError('INVALID_EMAIL');
    }
  }

  getEmail(): string {
    return this.email;
  }

  getName(): string {
    return this.name;
  }

  getType(): Type {
    return this.type;
  }
}
