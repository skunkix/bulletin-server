import { IImage } from "../types/IImage";
import { IRepository } from "../types/IRepository";

export class MockRepository implements IRepository {
    getImages(startTime: number): IImage[] {
        return getImagesMock;
    }

    addImage(img: IImage): void {
        return;
    }
}

const getImagesMock = [
    {
        url: "https://media0.giphy.com/media/q15EjVC1dBbOM/giphy.gif",
        width: 300,
        x: 120,
        y: 500,
        timestamp: 12341
    },
    {
        url: "https://media1.giphy.com/media/l2JHPc1s3B7m3Bc9q/giphy.gif",
        width: 100,
        x: 500,
        y: 123,
        timestamp: 12341
    },
    {
        url: "https://media0.giphy.com/media/cKytqJeZ9wdsB6169q/giphy.gif",
        width: 425,
        x: 300,
        y: 355,
        timestamp: 12341
    },
];