import { IImage } from "../types/IImage";
import { IRepository } from "../types/IRepository";

type Board = {
    images: IImage[]
};

export class Repository implements IRepository {
    private boards: { [state: string]: Board } = {};

    constructor(private boardImageLimit: number) {
        this.addBoard("0");
    }

    getImages(boardId: string, startTime: number): IImage[] {
        this.assertBoardExistence(boardId);
        return this.boards[boardId].images.filter(image => image.timestamp >= startTime);
    }

    addImage(boardId: string, img: IImage): void {
        this.assertBoardExistence(boardId);
        if (this.boards[boardId].images.length === this.boardImageLimit) {
            this.boards[boardId].images = this.boards[boardId].images.slice(1);
        }
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