import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { createProduct } from './product-handlers/create-product';
import { findProduct } from './product-handlers/find-product';
import { getAllProducts } from './product-handlers/get-all-products';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const port = 3000;

app.post('/api/products', createProduct);

app.get('/api/products', async (req: Request, res: Response) => {
    const allProducts = await getAllProducts()
    res.send(allProducts)
})

app.get('/api/products/:id', async (req: Request, res: Response) => {
    const productId = req.params.id
    const product = await findProduct(productId)
    res.send(product)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
