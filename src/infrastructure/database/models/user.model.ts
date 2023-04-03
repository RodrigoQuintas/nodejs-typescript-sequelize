import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequelize';

export enum Type {
  visitant = 'visitant',
  admin = 'admin',
}

interface UserRow {
  id: string;
  name: string;
  email: string;
  password: string;
  type: Type;
}

export class SequelizeUser extends Model<UserRow> {
  declare id: string;
  declare name: string;
  declare email: string;
  declare password: string;
  declare type: Type;
}

SequelizeUser.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM({
        values: [Type.admin, Type.visitant],
      }),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'users',
  },
);
