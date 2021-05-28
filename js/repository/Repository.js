"use strict";
exports.__esModule = true;
exports.Repository = void 0;
var Repository = (function () {
    function Repository(boardImageLimit) {
        this.boardImageLimit = boardImageLimit;
        this.boards = {};
        this.addBoard("0");
    }
    Repository.prototype.getImages = function (boardId, startTime) {
        this.assertBoardExistence(boardId);
        return this.boards[boardId].images.filter(function (image) { return image.timestamp >= startTime; });
    };
    Repository.prototype.addImage = function (boardId, img) {
        this.assertBoardExistence(boardId);
        if (this.boards[boardId].images.length === this.boardImageLimit) {
            this.boards[boardId].images = this.boards[boardId].images.slice(1);
        }
        this.boards[boardId].images.push(img);
    };
    Repository.prototype.assertBoardExistence = function (id) {
        if (!this.boards[id])
            throw new Error("Board doesn't exist!");
    };
    Repository.prototype.addBoard = function (id) {
        this.boards[id] = {
            images: []
        };
    };
    return Repository;
}());
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map