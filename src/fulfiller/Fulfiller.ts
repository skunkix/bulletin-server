import { resolveSoa } from 'dns';
import * as express from 'express';
import { IRepository } from "../types/IRepository";

export class RequestFulfiller {
    constructor(private repo: IRepository) {}

    getImages(req: express.Request, res: express.Response): void {
        const images = this.repo.getImages(0);
        res.send({
            images
        });
    }

    addImage(req: express.Request, res: express.Response): void {
        this.repo.addImage(req.body);

        res.end();
    }
}