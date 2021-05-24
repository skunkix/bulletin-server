import { IImage } from "./IImage";

export interface IRepository {
    getImages: (startTime: number) => IImage[],
    addImage: (img: IImage) => void
}