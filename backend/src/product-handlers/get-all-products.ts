import { Request, Response } from 'express';
import prisma from "../lib/prisma";
import { productReqSchema } from "../lib/product-req-schema";
import { TResponseType } from '../types/root-types';
import { Product } from '@prisma/client';

type TQueryParams = {
    pageNumber: string,
    pageSize: string
}
type TProductsData = {
    products: Product[],
    productsCount: number
}

export async function getAllProducts(req: Request<{}, {}, {}, TQueryParams>, res: Response<TResponseType<TProductsData>>) {
    try {
        const pageNumber = +req.query.pageNumber
        const pageSize = +req.query.pageSize
        const productsCount = await prisma.product.count();
        const offset = (pageNumber - 1) * pageSize
        const products = await prisma.product.findMany({
            skip: offset,
            take: pageSize,
            ...productReqSchema
        })
        res.send({
            success: true,
            message: "Getting all products is successful.",
            data: {
                products,
                productsCount
            }
        })
    } catch (error) {
        res.send({
            success: false,
            message: (error as Error).message,
        })
    }

}