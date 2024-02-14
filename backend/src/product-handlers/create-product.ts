import { Request, Response } from 'express';
import prisma from "../lib/prisma";
import { TProductProps } from "../types/product-types";
import { TResponseType } from '../types/root-types';
import { Product } from '@prisma/client';

interface TCreateProductRequest extends Request {
    body: TProductProps
}

export async function createProduct(req: TCreateProductRequest, res: Response<TResponseType<Product>>) {
    const { name, price, sizes, colors, images, description, details, collections, types } = req.body;

    try {
        const createdProduct = await prisma.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                images: {
                    create: images.map((image) => {
                        return {
                            url: image
                        }
                    })
                },
                details: {
                    create: details.map((detail) => {
                        return {
                            title: detail.title,
                            value: detail.value
                        }
                    })
                },
                collections: {
                    create: collections.map((collection) => {
                        return {
                            collection: {
                                create: {
                                    title: collection,
                                }
                            },
                        }
                    })
                },
                types: {
                    create: types.map((type) => {
                        return {
                            type: {
                                create: {
                                    title: type,
                                }
                            },
                        }
                    })
                },
                sizes: {
                    create: sizes.map((size) => {
                        return {
                            isExist: size.isExist,
                            size: {
                                create: {
                                    size: size.size,
                                }
                            },
                        }
                    })
                },
                colors: {
                    create: colors.map((color) => {
                        return {
                            isExist: color.isExist,
                            color: {
                                create: {
                                    title: color.title,
                                    hex: color.hex
                                }
                            },
                        }
                    })
                }
            }
        })

        res.send({
            success: true,
            message: "Product creating is successful.",
            data: createdProduct
        });
    } catch (error) {
        res.send({
            success: false,
            message: (error as Error).message,
        })
    }
};