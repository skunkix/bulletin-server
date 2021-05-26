"use strict";
exports.__esModule = true;
var express = require("express");
var config_1 = require("./config");
var Fulfiller_1 = require("./fulfiller/Fulfiller");
var MockRepository_1 = require("./mocks/MockRepository");
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
app.use(express.json());
var repo = config_1.useMockResponses ? new MockRepository_1.MockRepository() : new Repository_1.Repository();
var fulfiller = new Fulfiller_1.RequestFulfiller(repo);
app.post('/getImages', fulfiller.getImages.bind(fulfiller));
app.post('/addImage', fulfiller.addImage.bind(fulfiller));
app.listen(port, function () {
    console.log("Running express at " + hostname + ":" + port);
});
//# sourceMappingURL=main.js.map