export interface Game {
    _id: string,
    title: string,
    summary: string,
    developer: string,
    genre: string,
    type: string,
    rating?:number
    imgPath?: string,    
}