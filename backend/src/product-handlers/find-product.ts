import { Request, Response } from 'express';
import { Product } from "@prisma/client";
import prisma from "../lib/prisma";
import { productReqSchema } from "../lib/product-req-schema";
import { TResponseType } from "../types/root-types";

export async function findProduct(req: Request, res: Response<TResponseType<Product>>) {
    try {
        const productId = req.params.id
        const product = await prisma.product.findUnique({
            where: { id: productId },
            ...productReqSchema
        })
        res.send({
            success: true,
            message: `Getting product with id=${productId} is successful.`,
            data: product
        })
    } catch (error) {
        res.send({
            success: false,
            message: (error as Error).message,
        })
    }

}