import dotenv from 'dotenv';

dotenv.config();

export default {
  development: {
    database: {
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 'localhost',
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'mydatabase',
    },
    port: process.env.PORT,
  },
};
