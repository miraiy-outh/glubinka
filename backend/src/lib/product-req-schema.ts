export const productReqSchema = {
    include: {
        images: {
            select: {
                url: true
            }
        },
        details: {
            select: {
                title: true,
                value: true
            }
        },
        sizes: {
            select: {
                isExist: true,
                size: {
                    select: {
                        size: true
                    }
                }
            }
        },
        colors: {
            select: {
                isExist: true,
                color: {
                    select: {
                        title: true,
                        hex: true,
                    }
                }
            }
        },
        types: {
            select: {
                type: {
                    select: {
                        id: true,
                        title: true
                    }
                }
            }
        },
        collections: {
            select: {
                collection: {
                    select: {
                        id: true,
                        title: true
                    }
                }
            }
        }
    }
}