type TMockCollectionProps = {
    id: number,
    imgURL: string,
    header: string,
    title: string
}

type TSummaryType = 'main' | 'summary'

type TMockSummaryProps = {
    id: number,
    type: TSummaryType,
    className: string,
    imgURL: string,
    header: string
}

export type TSizeValue = {
    size: 'S' | 'M' | 'L' | 'XL' | 'ONE',
    isExist: boolean
}
export type TColorValue = {
    title: string,
    hex: string,
    isExist: boolean
}
export type TDetailInfo = {
    title: string,
    value: string
}

export type TMockProductProps = {
    id: number,
    name: string,
    price: number,
    sizes: TSizeValue[],
    colors: TColorValue[],
    images: string[],
    description: string,
    details: TDetailInfo[],
    isInFavorite: boolean,
    isInCart: boolean
}

export const mockCollectionInfo: TMockCollectionProps[] = [
    {
        id: 1,
        imgURL: "public/images/col1.jpg",
        header: "База",
        title: "Базовая коллекция с приятными цветами"
    },

    {
        id: 2,
        imgURL: "public/images/col2.jpg",
        header: "Улица",
        title: "Скорость и свобода"
    },

    {
        id: 3,
        imgURL: "public/images/col3.jpg",
        header: "Молодость",
        title: "Наивность с нотками ностальгии"
    },

    {
        id: 4,
        imgURL: "public/images/col4.jpg",
        header: "Спорт",
        title: "Удобная одежда, не сковывающая движения"
    },

    {
        id: 5,
        imgURL: "public/images/col5.jpg",
        header: "Огонь",
        title: "Ярко, дерзко, броско"
    },

    {
        id: 6,
        imgURL: "public/images/col6.jpg",
        header: "Техно",
        title: "Странные формы и цвета"
    },
]

export const mockSummaryInfo: TMockSummaryProps[] = [
    {
        id: 1,
        type: "main",
        className: "a",
        imgURL: "public/images/main_grid.jpg",
        header: "Бренд, созданный в самых отдалённых уголках страны"
    },

    {
        id: 2,
        type: "summary",
        className: "b",
        imgURL: "public/images/grid1.jpg",
        header: "Эксклюзивный дроп"
    },

    {
        id: 3,
        type: "summary",
        className: "c",
        imgURL: "public/images/grid2.jpg",
        header: "Новые аксессуары"
    },

    {
        id: 4,
        type: "summary",
        className: "d",
        imgURL: "public/images/grid3.jpg",
        header: "Россия и Sci-Fi"
    },

    {
        id: 5,
        type: "summary",
        className: "e",
        imgURL: "public/images/grid4.jpg",
        header: "Back to USSR"
    }
]

export const mockProductsInfo: TMockProductProps[] = [
    {
        id: 1,
        name: "Футболка",
        price: 3999,
        sizes: [
            {
                size: "S",
                isExist: true
            },
            {
                size: "M",
                isExist: true
            },
            {
                size: "L",
                isExist: true
            },
            {
                size: "XL",
                isExist: false
            }
        ],
        colors: [
            {
                title: "Белый",
                hex: "#ffffff",
                isExist: true
            },
            {
                title: "Чёрный",
                hex: "#000000",
                isExist: true
            },
        ],
        images: [
            "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        ],
        description: "Представляем вам нашу футболку - классический и универсальный элемент гардероба, который должен быть в гардеробе каждого человека. Она изготовлена из мягкого и дышащего материала высокого качества, что обеспечивает комфорт и удобство при ношении на протяжении всего дня.",
        details: [
            {
                title: "Материал",
                value: "95% хлопок, 5% полиэстер"
            },
            {
                title: "Плотность",
                value: "380 г/м3"
            },
            {
                title: "Артикул",
                value: "123456789"
            },
            {
                title: "Код товара",
                value: "1999"
            }
        ],
        isInFavorite: false,
        isInCart: false
    },
    {
        id: 2,
        name: "Шорты",
        price: 4999,
        sizes: [
            {
                size: "S",
                isExist: true
            },
            {
                size: "M",
                isExist: true
            },
            {
                size: "L",
                isExist: true
            },
            {
                size: "XL",
                isExist: true
            }
        ],
        colors: [
            {
                title: "Синий",
                hex: "#0000ff",
                isExist: true
            },
            {
                title: "Красный",
                hex: "#ff0000",
                isExist: true
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "https://images.unsplash.com/photo-1598522325484-118715b67eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80"
        ],
        description: "Наши шорты изготовлены из легкого и дышащего материала, что обеспечивает комфорт и свободу движений. Они имеют модный и современный дизайн, который позволяет создавать различные образы и стили.",
        details: [
            {
                title: "Материал",
                value: "95% хлопок, 5% полиэстер"
            },
            {
                title: "Плотность",
                value: "380 г/м3"
            },
            {
                title: "Артикул",
                value: "123456789"
            },
            {
                title: "Код товара",
                value: "1999"
            }
        ],
        isInFavorite: false,
        isInCart: false
    },
    {
        id: 3,
        name: "Свитшот",
        price: 8999,
        sizes: [
            {
                size: "S",
                isExist: true
            },
            {
                size: "M",
                isExist: true
            },
            {
                size: "L",
                isExist: true
            },
            {
                size: "XL",
                isExist: true
            }
        ],
        colors: [
            {
                title: "Белый",
                hex: "#ffffff",
                isExist: true
            },
            {
                title: "Черный",
                hex: "#000000",
                isExist: true
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
            "https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "https://images.unsplash.com/photo-1601063476271-a159c71ab0b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80"
        ],
        description: "Наш свитшот изготовлен из мягкого и комфортного материала высокого качества, который обеспечивает тепло и удобство в холодные дни. Он имеет модный и современный дизайн, который позволяет создавать различные образы и стили.",
        details: [
            {
                title: "Материал",
                value: "95% хлопок, 5% полиэстер"
            },
            {
                title: "Плотность",
                value: "380 г/м3"
            },
            {
                title: "Артикул",
                value: "123456789"
            },
            {
                title: "Код товара",
                value: "1999"
            }
        ],
        isInFavorite: false,
        isInCart: false
    },
    {
        id: 4,
        name: "Джоггеры",
        price: 5499,
        sizes: [
            {
                size: "S",
                isExist: true
            },
            {
                size: "M",
                isExist: true
            },
            {
                size: "L",
                isExist: true
            },
            {
                size: "XL",
                isExist: true
            }
        ],
        colors: [
            {
                title: "Синий",
                hex: "#0000ff",
                isExist: true
            },
            {
                title: "Красный",
                hex: "#ff0000",
                isExist: true
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1552902875-9ac1f9fe0c07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "https://images.unsplash.com/photo-1553247407-23251ce81f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
        ],
        description: "Джоггеры имеют удобный посад, резинку на талии и манжеты на ногах, что обеспечивает отличную посадку и защиту от скручивания во время движения. Они также оснащены карманами для удобства хранения мелочей.",
        details: [
            {
                title: "Материал",
                value: "95% хлопок, 5% полиэстер"
            },
            {
                title: "Плотность",
                value: "380 г/м3"
            },
            {
                title: "Артикул",
                value: "123456789"
            },
            {
                title: "Код товара",
                value: "1999"
            }
        ],
        isInFavorite: false,
        isInCart: false
    },
    {
        id: 5,
        name: "Джинсовая куртка",
        price: 14499,
        sizes: [
            {
                size: "S",
                isExist: true
            },
            {
                size: "M",
                isExist: true
            },
            {
                size: "L",
                isExist: true
            },
            {
                size: "XL",
                isExist: true
            }
        ],
        colors: [
            {
                title: "Темно-синий",
                hex: "#0000ff",
                isExist: true
            },
            {
                title: "Голубой",
                hex: "#80a6ff",
                isExist: true
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1606243769346-784daeb4562f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1564438259159-32c208873398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        ],
        description: "Джинсовая куртка - это классический и всегда актуальный элемент гардероба, который сочетает в себе практичность и стиль. Куртки снабжены карманами, молниями, пуговицами и другими удобствами, что делает их функциональными и практичными.",
        details: [
            {
                title: "Материал",
                value: "95% хлопок, 5% полиэстер"
            },
            {
                title: "Плотность",
                value: "380 г/м3"
            },
            {
                title: "Артикул",
                value: "123456789"
            },
            {
                title: "Код товара",
                value: "1999"
            }
        ],
        isInFavorite: false,
        isInCart: false
    },
    {
        id: 6,
        name: "Бандана",
        price: 899,
        sizes: [
            {
                size: "S",
                isExist: true
            },
            {
                size: "M",
                isExist: true
            },
            {
                size: "L",
                isExist: true
            },
            {
                size: "XL",
                isExist: true
            }
        ],
        colors: [
            {
                title: "Белый",
                hex: "#ffffff",
                isExist: true
            },
            {
                title: "Черный",
                hex: "#000000",
                isExist: true
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1557050751-fabbc420f962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "https://images.unsplash.com/photo-1572599919023-ac08b9519794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        ],
        description: "Бандана - это стильный и универсальный аксессуар, который может использоваться в различных ситуациях и стилях. В нашем магазине вы найдете банданы различных цветов.",
        details: [
            {
                title: "Материал",
                value: "95% хлопок, 5% полиэстер"
            },
            {
                title: "Плотность",
                value: "380 г/м3"
            },
            {
                title: "Артикул",
                value: "123456789"
            },
            {
                title: "Код товара",
                value: "1999"
            }
        ],
        isInFavorite: false,
        isInCart: false
    },
    {
        id: 7,
        name: "Аксессуар цепь на шею",
        price: 2499,
        sizes: [
            {
                size: "ONE",
                isExist: true
            }
        ],
        colors: [
            {
                title: "Черный",
                hex: "#000000",
                isExist: true
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1521038063972-ab961f8515b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        ],
        description: "Цепь - это стильный элемент гардероба, который может использоваться как дополнение к необычному луку.",
        details: [
            {
                title: "Материал",
                value: "100% сталь"
            },
            {
                title: "Артикул",
                value: "123456789"
            },
            {
                title: "Код товара",
                value: "1999"
            }
        ],
        isInFavorite: false,
        isInCart: false
    }
]