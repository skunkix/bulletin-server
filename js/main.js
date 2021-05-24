var http = require('http');
var app = require('express')();
var cors = require("cors");
var hostname = '127.0.0.1';
var port = process.env.PORT || 3000;
var whitelist = ['http://localhost:8080'];
var corsOptions = {
    origin: '*'
};
app.use(cors(corsOptions));
app.post('/getImages', function (req, res) {
    res.send({
        heresSome: "jsonForYa"
    });
});
app.listen(port, function () {
    console.log("Running express at " + hostname + ":" + port);
});
//# sourceMappingURL=main.js.map