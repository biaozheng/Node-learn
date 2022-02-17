let http = require("http");
let url = require("url");

function startServer(route, handle) {
    http.createServer((req, res) => {
        let pathname = url.parse(req.url).pathname;
        console.log(`Request for ${pathname} received`);

        route(handle, pathname, res, req);
    }).listen(8888);
    console.log("Server has started");
};

exports.startServer = startServer;