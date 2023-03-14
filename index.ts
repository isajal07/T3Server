import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const cors = require('cors');

dotenv.config();

const app: Express = express();
const https = require('https');
const path = require('path');
const fs = require('fs');

const port = process.env.PORT;
require('./src/db/mongoose');
const router = require('./src/routes/routes')

app.use(cors());

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Serverrrrr');
});
app.use('/api', router);

const sslServer = https.createServer({
  key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
}, app);

sslServer.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});