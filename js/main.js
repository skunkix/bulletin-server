"use strict";
exports.__esModule = true;
var express = require("express");
var api_1 = require("./network/api");
var cors = require("cors");
var app = express();
var hostname = '127.0.0.1';
var port = process.env.PORT || 3000;
var whitelist = ['http://localhost:8080'];
var corsOptions = {
    origin: '*'
};
app.use(cors(corsOptions));
app.post('/getImages', api_1.getImages);
app.listen(port, function () {
    console.log("Running express at " + hostname + ":" + port);
});
//# sourceMappingURL=main.js.map