var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    console.log(process.env)
//    res.write('Yo!');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(process.env));
    res.end();
}).listen(process.env.PORT || 3000);
