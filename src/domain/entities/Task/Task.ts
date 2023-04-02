import { ValidationError } from '../../errors/ValidationError';
import { User } from '../User/User';

export enum Priority {
  high = 'high',
  medium = 'medium',
  low = 'low',
}

interface TaskConstructorArgs {
  title: string;
  description: string;
  point: number;
  priority: Priority;
  startDate: Date;
  endDate?: Date;
  idUser?: String;
}

export abstract class Task {
  private static POINTS_FIBONACCI = [0, 1, 2, 3, 5, 8, 13];

  private title: string;
  private description: string;
  private point: number;
  private priority: Priority;
  private startDate: Date;
  private endDate?: Date;
  private user: User;

  constructor(args: TaskConstructorArgs) {
    const { point } = args;
    this.validatePoints(point);

    Object.assign(this, args);
  }

  private validatePoints(point: number) {
    const isValid = Task.POINTS_FIBONACCI.includes(point);

    if (!isValid) {
      throw new ValidationError('INVALID_POINT');
    }
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getPoint(): number {
    return this.point;
  }

  getPriority(): Priority {
    return this.priority;
  }

  getStartDate(): Date {
    return this.startDate;
  }

  getEndDate(): Date {
    return this.endDate;
  }

  getUser(): User {
    return this.user;
  }
}
