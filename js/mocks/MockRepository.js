"use strict";
exports.__esModule = true;
exports.MockRepository = void 0;
var MockRepository = (function () {
    function MockRepository() {
    }
    MockRepository.prototype.getImages = function (boardId, startTime) {
        return getImagesMock;
    };
    MockRepository.prototype.addImage = function (boardId, img) {
        return;
    };
    return MockRepository;
}());
exports.MockRepository = MockRepository;
var getImagesMock = [
    {
        url: "https://media0.giphy.com/media/q15EjVC1dBbOM/giphy.gif",
        width: 300,
        x: 0,
        y: 0,
        timestamp: 12341
    },
    {
        url: "https://media1.giphy.com/media/l2JHPc1s3B7m3Bc9q/giphy.gif",
        width: 100,
        x: 500,
        y: 123,
        timestamp: 12341
    },
    {
        url: "https://media0.giphy.com/media/cKytqJeZ9wdsB6169q/giphy.gif",
        width: 425,
        x: 600,
        y: 355,
        timestamp: 12341
    },
    {
        url: "https://media0.giphy.com/media/q15EjVC1dBbOM/giphy.gif",
        width: 300,
        x: 120,
        y: 500,
        timestamp: 12341
    }
];
//# sourceMappingURL=MockRepository.js.map