var http = require("http")
var fs = require("fs")
var url = require("url")
var data

http.createServer(function (reqest, response) {
    var q = url.parse(req.url,true)

    if (q.pathname == "/"){
        var fileName = "./index.html"
    } else {
        var fileName = "." + q.pathname
    }

    
    
    fs.readFile(fileName, function(err, body) {
        if (err){
            response.writeHead(404, {'Content-Type': 'text/html'});
            return response.end("404 - Page not found [" + err + "]");
        }

        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data)
        response.write(body);
        return response.end();
    });
}).listen(80);
