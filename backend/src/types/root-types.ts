export type TResponseType<T> = {
    success: boolean,
    message: string,
    data?: T
}