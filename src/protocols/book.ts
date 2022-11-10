export type Book = {
    id?: number,
    bookTitle: string,
    pages: number,
    startReading?: Date | string,
    status: string,
    finishReading?: Date | string
}