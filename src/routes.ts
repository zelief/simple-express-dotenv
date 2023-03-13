import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { Router } from 'express';

dotenv.config();

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: process.env.APP_NAME });
});

export default routes;
