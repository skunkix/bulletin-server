"use strict";
exports.__esModule = true;
exports.RequestFulfiller = void 0;
var RequestFulfiller = (function () {
    function RequestFulfiller(repo) {
        this.repo = repo;
    }
    RequestFulfiller.prototype.getImages = function (req, res) {
        var images = this.repo.getImages(0);
        res.send({
            images: images
        });
    };
    RequestFulfiller.prototype.addImage = function (req, res) {
        console.log(req.body);
        res.end();
    };
    return RequestFulfiller;
}());
exports.RequestFulfiller = RequestFulfiller;
//# sourceMappingURL=Fulfiller.js.map