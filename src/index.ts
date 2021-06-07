import 'reflect-metadata';
import express from 'express';

import './database/connect';
const app = express();

app.use(express.json());

app.listen(8001, () =>
  console.log(`🔥 Server started at http://localhost:8001`)
);
