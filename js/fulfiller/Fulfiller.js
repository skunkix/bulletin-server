"use strict";
exports.__esModule = true;
exports.RequestFulfiller = void 0;
var RequestFulfiller = (function () {
    function RequestFulfiller(repo) {
        this.repo = repo;
    }
    RequestFulfiller.prototype.getImages = function (req, res) {
        res.send({
            heresSome: "jsonForYas"
        });
    };
    RequestFulfiller.prototype.addImage = function (req, res) {
    };
    return RequestFulfiller;
}());
exports.RequestFulfiller = RequestFulfiller;
//# sourceMappingURL=Fulfiller.js.map