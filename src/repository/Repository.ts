import { IImage } from "../types/IImage";
import { IRepository } from "../types/IRepository";

type Board = {
    images: IImage[]
};

export class Repository implements IRepository {
    private boards: { [state: string]: Board } = {};

    constructor() {
        this.addBoard("0");
    }

    getImages(boardId: string, startTime: number): IImage[] {
        this.assertBoardExistence(boardId);
        return this.boards[boardId].images.filter(image => image.timestamp >= startTime);
    }

    addImage(boardId: string, img: IImage): void {
        this.assertBoardExistence(boardId);
        this.boards[boardId].images.push(img);
    }

    assertBoardExistence(id: string) {
        if (!this.boards[id]) throw new Error("Board doesn't exist!");
    }

    private addBoard(id: string) {
        this.boards[id] = {
            images: []
        };
    }
}