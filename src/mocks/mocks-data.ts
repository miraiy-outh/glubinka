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