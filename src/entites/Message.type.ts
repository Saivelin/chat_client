export interface MessageType {
    id: number,
    text: string,
    author: any,
    files?: string[]
    checked: boolean
    authorId: number
}