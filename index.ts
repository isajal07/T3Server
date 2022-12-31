import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
require('./src/db/mongoose');

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Serverrrrr');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});