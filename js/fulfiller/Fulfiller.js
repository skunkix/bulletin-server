"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.RequestFulfiller = void 0;
var RequestFulfiller = (function () {
    function RequestFulfiller(repo, date) {
        if (date === void 0) { date = Date; }
        this.repo = repo;
        this.date = date;
    }
    RequestFulfiller.prototype.getImages = function (req, res) {
        try {
            var body = req.body;
            if (!typesAllMatch([
                { a: body.boardId, b: 'string' },
                { a: body.startTimestamp, b: 'number' }
            ])) {
                return invalidRequest(res);
            }
            var images = this.repo.getImages(body.boardId, body.startTimestamp);
            res.send({
                images: images,
                timestamp: this.date.now()
            });
        }
        catch (err) {
            return invalidRequest(res);
        }
    };
    RequestFulfiller.prototype.addImage = function (req, res) {
        try {
            var body = req.body;
            if (!typesAllMatch([
                { a: body.boardId, b: 'string' },
                { a: body.url, b: 'string' },
                { a: body.width, b: 'number' },
                { a: body.x, b: 'number' },
                { a: body.y, b: 'number' },
            ])) {
                return invalidRequest(res);
            }
            this.repo.addImage(body.boardId, __assign(__assign({}, body), { timestamp: this.date.now() }));
            res.end();
        }
        catch (err) {
            return invalidRequest(res);
        }
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