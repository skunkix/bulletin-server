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
        var body = req.body;
        if (!typesAllMatch([
            { a: body.url, b: 'string' },
            { a: body.width, b: 'number' },
            { a: body.x, b: 'number' },
            { a: body.y, b: 'number' },
        ])) {
            return invalidRequest(res);
        }
        this.repo.addImage(body);
        res.end();
    };
    return RequestFulfiller;
}());
exports.RequestFulfiller = RequestFulfiller;
function typesAllMatch(pairs) {
    return !pairs.some(function (pair) { return pair.a === undefined || typeof pair.a !== pair.b; });
}
function invalidRequest(res) {
    res.status(400);
    res.end();
}
//# sourceMappingURL=Fulfiller.js.map