import express from 'express';
import morgan from 'morgan';

import { PORT } from './config.js';

import { categoryRouter } from './src/routes/categoryRoutes.js';
import { productRouter } from './src/routes/productRoutes.js';

const app = express();

//Settings
app.set('port', PORT);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use('/api/categories', categoryRouter);
app.use('/api/products', productRouter);

export default app;