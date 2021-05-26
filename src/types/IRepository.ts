import { IImage } from "./IImage";

export interface IRepository {
    getImages: (boardId: string, startTime: number) => IImage[],
    addImage: (boardId: string, img: IImage) => void
}