"use strict";
exports.__esModule = true;
var express = require("express");
var Fulfiller_1 = require("./fulfiller/Fulfiller");
var Repository_1 = require("./repository/Repository");
var cors = require("cors");
var app = express();
var hostname = '127.0.0.1';
var port = process.env.PORT || 3000;
var whitelist = ['http://localhost:8080'];
var corsOptions = {
    origin: '*'
};
app.use(cors(corsOptions));
var repo = new Repository_1.Repository();
var fulfiller = new Fulfiller_1.RequestFulfiller(repo);
app.post('/getImages', fulfiller.getImages);
app.post('/addImage', fulfiller.addImage);
app.listen(port, function () {
    console.log("Running express at " + hostname + ":" + port);
});
//# sourceMappingURL=main.js.map