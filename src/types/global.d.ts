export type Item = {
    id: string,
    content: string
}

export type List = {
    id: string,
    name: string,
    items: Item[],
}