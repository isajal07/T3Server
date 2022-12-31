import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
require('./src/db/mongoose');
const router = require('./src/routes/routes')

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Serverrrrr');
});
app.use('/api', router);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});