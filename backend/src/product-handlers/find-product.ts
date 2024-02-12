import prisma from "../lib/prisma";
import { productReqSchema } from "../lib/product-req-schema";

export async function findProduct(id: string) {
    const product = await prisma.product.findUnique({
        where: { id: id },
        ...productReqSchema
    })

    return product
}