import { resolveSoa } from 'dns';
import * as express from 'express';
import { IRepository } from "../types/IRepository";

export class RequestFulfiller {
    constructor(private repo: IRepository, private date = Date) {}

    getImages(req: express.Request, res: express.Response): void {
        try {
            const body = req.body;
            if (!typesAllMatch([
                { a: body.boardId, b: 'string' },
                { a: body.startTimestamp, b: 'number' }
            ])) {
                return invalidRequest(res);
            }
    
            const images = this.repo.getImages(0);
            res.send({
                images,
                timestamp: this.date.now()
            });
        } catch(err) {
            return invalidRequest(res);
        }
    }

    addImage(req: express.Request, res: express.Response): void {
        try {
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
        } catch(err) {
            return invalidRequest(res);
        }
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