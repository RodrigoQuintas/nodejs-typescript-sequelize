import express from 'express';
import dotenv from 'dotenv';
import ExpressRoutesAdapter from '../infrastructure/adapters/expressjs/express-routes.adapter';
import { CreateUserControllerFactory } from './factories/create-user-controller.factory';
dotenv.config();

const app = express();

app.use(express.json());

const createUserController = CreateUserControllerFactory.make();
app.post('/user', ExpressRoutesAdapter.adapt(createUserController));

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server is listening on http://localhost:${port}`),
);
