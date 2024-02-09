import express, { Request, Response } from 'express';
import prisma from './lib/prisma';

const app = express();
const port = 3000;

app.post('/api/products', async (req: Request, res: Response) => {
    const createdProduct = await prisma.product.create({
        data: {
            name: 'Футболка',
            price: 3499,
            description: 'lol'
        }
    })
    res.send(createdProduct);

});

app.get('/api/products', async (req: Request, res: Response) => {
    const allProducts = await prisma.product.findMany()
    res.send(allProducts)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
