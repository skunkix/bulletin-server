import { IRepository, IImage } from "../types";
import { RequestFulfiller } from "./Fulfiller";
import * as express from 'express';

describe("Fulfiller of API requests", () => {
    const MockRepo: IRepository = {
        getImages: jest.fn((startTime: number) => []),
        addImage: jest.fn((img: IImage) => {})
    };
    
    const fulfiller = new RequestFulfiller(MockRepo);

    it("should add image to repo and end request", () => {
        const req = {
            body: {
                url: "https://media0.giphy.com/media/q15EjVC1dBbOM/giphy.gif",
                width: 200,
                x: 10,
                y: 200
            }
        };
        const res = {
            end: jest.fn()
        };

        fulfiller.addImage(req as unknown as express.Request, res as unknown as express.Response);
        
        expect(MockRepo.addImage).toHaveBeenCalledWith(req.body);
    })
});