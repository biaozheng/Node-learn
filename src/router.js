function route(handle, pathname, res, req) {
    console.log(`About to toute a request for ${pathname}`);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](res, req);
    } else {
        console.log(`No request handlers found for ${pathname}`);
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("404 Not Found");
        res.end();
    }
}

exports.route = route;