import { IRepository, IImage } from "../types";
import { RequestFulfiller } from "./Fulfiller";
import * as express from 'express';

describe("Fulfiller of API requests", () => {
    let mockRepo;
    let res;
    let fulfiller;
    let date;

    beforeEach(() => {
        mockRepo = {
            getImages: jest.fn(),
            addImage: jest.fn()
        };
        res = { end: jest.fn(), status: jest.fn() };
        date = { now: () => Date.now() }
        fulfiller = new RequestFulfiller(mockRepo, date);
    })
    
    it("should add valid image to repo and end request", () => {
        const req = {
            body: {
                url: "https://media0.giphy.com/media/q15EjVC1dBbOM/giphy.gif",
                width: 200,
                x: 10,
                y: 200
            }
        };

        fulfiller.addImage(req, res);
        
        expect(mockRepo.addImage).toHaveBeenCalledWith({ ...req.body, timestamp: date.now() });
        expect(res.end).toHaveBeenCalled();
    });

    it("should not add an image if a required field is missing or the wrong type", () => {
        fulfiller.addImage({ body: { width: 200, x: 10, y: 10 }}, res);
        fulfiller.addImage({ body: { url: "url", x: 10, y: 10 }}, res);
        fulfiller.addImage({ body: { url: "url", width: 200, y: 10 }}, res);
        fulfiller.addImage({ body: { url: "url", width: 200, x: 10 }}, res);
        
        expect(mockRepo.addImage).not.toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledTimes(4);
    });
});