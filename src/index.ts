import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (_: Request, res: Response) => {
  res.send('Express + Typescript, Yay!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
