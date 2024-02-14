import { Request, Response } from 'express';
import prisma from "../lib/prisma"
import { TResponseType } from '../types/root-types';
import { Product } from '@prisma/client';

export async function deleteProduct(req: Request, res: Response<TResponseType<Product>>) {
    try {
        const productId = req.params.id
        const deletedProduct = await prisma.product.delete({
            where: { id: productId }
        })
        res.send({
            success: true,
            message: `Deleting product with id=${productId} is successful.`,
            data: deletedProduct
        })
    } catch (error) {
        res.send({
            success: false,
            message: (error as Error).message,
        })
    }

}