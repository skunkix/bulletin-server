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
        res = { end: jest.fn(), status: jest.fn(), send: jest.fn() };
        const now = Date.now();
        date = { now: () => now }
        fulfiller = new RequestFulfiller(mockRepo, date);
    })

    describe("getImages", () => {
        const makeReq = (boardId, startTimestamp) => ({
            body: {
                boardId,
                startTimestamp
            }
        });

        it("should respond with 400 error if request is not valid", () => {
            const reqs = [
                fulfiller.getImages({}, res),
                fulfiller.getImages(makeReq(), res),
                fulfiller.getImages(makeReq(3, 1), res),
                fulfiller.getImages(makeReq("3", "1"), res),
                fulfiller.getImages(makeReq(undefined, 4), res),
                fulfiller.getImages(makeReq("1", undefined), res),
            ];

            expect(res.status).toHaveBeenCalledTimes(reqs.length);
            expect(res.end).toHaveBeenCalledTimes(reqs.length);
        });

        it("should get images from repo and send them if request is valid", () => {
            const images = ["1", "2", "3"];
            mockRepo.getImages.mockReturnValue(images);

            fulfiller.getImages(makeReq("board-1", 500000), res);

            expect(mockRepo.getImages).toHaveBeenCalledWith("board-1", 500000);
            expect(res.send).toHaveBeenCalledWith({
                images: images,
                timestamp: date.now()
            });
        });
    });
    
    describe("addImage", () => {
        it("should add valid image to repo and end request", () => {
            const req = {
                body: {
                    boardId: "3",
                    url: "https://media0.giphy.com/media/q15EjVC1dBbOM/giphy.gif",
                    width: 200,
                    x: 10,
                    y: 200
                }
            };
    
            fulfiller.addImage(req, res);
            
            expect(mockRepo.addImage).toHaveBeenCalledWith("3", { ...req.body, timestamp: date.now() });
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
    })
    
});