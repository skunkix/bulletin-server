import { Repository } from './Repository';

describe("Repository", () => {

    it("should delete oldest image if number of images exceeds boardImageLimit", () => {
        const limit = 20;
        const repo = new Repository(limit);

        for (let i = 0; i < limit; ++i) {
            repo.addImage("0", {
                url: "https://image-" + i + ".com",
                width: 0,
                x: 0,
                y: 0,
                timestamp: 0
            });
        }

        repo.addImage("0", {
            url: "https://image-new.com",
            width: 0,
            x: 0,
            y: 0,
            timestamp: 0
        });

        expect(repo.getImages("0", 0)[0].url).toEqual("https://image-1.com");
        expect(repo.getImages("0", 0)[limit - 1].url).toEqual("https://image-new.com");
    });

    it("should delete oldest image if number of images exceeds boardImageLimit", () => {
        const limit = 100;
        const repo = new Repository(limit);

        for (let i = 0; i < limit + 20; ++i) {
            repo.addImage("0", {
                url: "https://image-" + i + ".com",
                width: 0,
                x: 0,
                y: 0,
                timestamp: 0
            });
        }

        expect(repo.getImages("0", 0)[0].url).toEqual("https://image-20.com");
        expect(repo.getImages("0", 0)[limit - 1].url).toEqual("https://image-119.com");
    });

});