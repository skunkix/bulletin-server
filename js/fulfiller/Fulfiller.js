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
        var images = this.repo.getImages(0);
        res.send({
            images: images,
            timestamp: this.date.now()
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
        this.repo.addImage(__assign(__assign({}, body), { timestamp: this.date.now() }));
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