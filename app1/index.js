var restify = require('restify');

function respond(req, res, next) {

    try {
        var jsonBody = JSON.parse(req.body);
        console.log(jsonBody.name);
        //res.send(202);
        res.send("Hello "+jsonBody.name);

    } catch (err) {
    	console.log(err);
        res.send(203);
    }

    res.setHeader('Access-Control-Allow-Origin', '*');

    next();

}

var server = restify.createServer();
server.use(restify.bodyParser()); // mapped in req.params
server.post('/request', respond);


server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});