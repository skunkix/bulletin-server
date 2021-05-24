import { resolveSoa } from 'dns';
import * as express from 'express';
import { IRepository } from "../types/IRepository";

export class RequestFulfiller {
    constructor(private repo: IRepository, private date = Date) {}

    getImages(req: express.Request, res: express.Response): void {
        const images = this.repo.getImages(0);
        res.send({
            images,
            timestamp: this.date.now()
        });
    }

    addImage(req: express.Request, res: express.Response): void {
        const body = req.body;
        if (!typesAllMatch([
            { a: body.url, b: 'string' },
            { a: body.width, b: 'number' },
            { a: body.x, b: 'number' },
            { a: body.y, b: 'number' },
        ])) {
            return invalidRequest(res);
        }
        
        this.repo.addImage({ ...body, timestamp: this.date.now() });
        res.end();
    }
}

type FieldType = 'number' | 'string';
type TypePair = {
    a: any,
    b: FieldType
};
type TypePairs = TypePair[]

function typesAllMatch(pairs: TypePairs): boolean {
    return !pairs.some(pair => pair.a === undefined || typeof pair.a !== pair.b);
}

function invalidRequest(res: express.Response): void {
    res.status(400);
    res.end();
}