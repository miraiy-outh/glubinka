import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { createProduct } from './product-handlers/create-product';
import { findProduct } from './product-handlers/find-product';
import { getAllProducts } from './product-handlers/get-all-products';
import { deleteProduct } from './product-handlers/delete-product';
import { TResponseType } from './types/root-types';
import { Product } from '@prisma/client';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const port = 3000;

app.post('/api/products', createProduct);

app.get('/api/products', getAllProducts)

app.get('/api/products/:id', findProduct)

app.delete('/api/products/:id', deleteProduct)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
