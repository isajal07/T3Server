"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors = require('cors');
dotenv_1.default.config();
const app = (0, express_1.default)();
const https = require('https');
const path = require('path');
const fs = require('fs');
const port = process.env.PORT;
require('./src/db/mongoose');
const router = require('./src/routes/routes');
app.use(cors());
app.use(express_1.default.json());
app.get('/', (req, res) => {
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
