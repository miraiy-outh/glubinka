import prisma from "../lib/prisma";
import { productReqSchema } from "../lib/product-req-schema";

export async function getAllProducts() {
    const product = await prisma.product.findMany({
        ...productReqSchema
    })

    return product
}