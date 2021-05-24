import { IImage } from "../types/IImage";
import { IRepository } from "../types/IRepository";

export class Repository implements IRepository {
    getImages(startTime: number): IImage[] {
        return [];
    }

    addImage(img: IImage): void {
        return;
    }
}