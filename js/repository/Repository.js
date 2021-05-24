"use strict";
exports.__esModule = true;
exports.Repository = void 0;
var Repository = (function () {
    function Repository() {
        this.images = [];
    }
    Repository.prototype.getImages = function (startTime) {
        return this.images;
    };
    Repository.prototype.addImage = function (img) {
        this.images.push(img);
    };
    return Repository;
}());
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map