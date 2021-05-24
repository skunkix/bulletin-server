import * as express from 'express';
import { IRepository } from "../types/IRepository";

export class RequestFulfiller {
    constructor(private repo: IRepository) {}

    getImages(req: express.Request, res: express.Response): void {
        res.send({
            heresSome: "jsonForYa"
        });
    }

    addImage(req: Express.Request, res: Express.Response): void {

    }
}