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

export type TProductProps = {
    name: string,
    price: number,
    sizes: TSizeValue[],
    colors: TColorValue[],
    images: string[],
    description: string,
    details: TDetailInfo[],
    collections: string[],
    types: string[]
}
