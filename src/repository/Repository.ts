import { IImage } from "../types/IImage";
import { IRepository } from "../types/IRepository";

export class Repository implements IRepository {
    private images: IImage[] = [];

    getImages(startTime: number): IImage[] {
        return this.images;
    }

    addImage(img: IImage): void {
        this.images.push(img);
    }
}