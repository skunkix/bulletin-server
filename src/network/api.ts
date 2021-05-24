import * as express from 'express';

export function getImages(req: express.Request, res: express.Response): void {
    res.send({
        heresSome: "jsonForYa"
      });
}

export function addImage(req: Express.Request, res: Express.Response): void {

}