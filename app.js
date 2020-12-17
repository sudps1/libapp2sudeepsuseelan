var http = require("http");
var server = http.createServer(function(req,res){
    if(req.url === "/"){
        res.write("Welcome to Server");
        res.end();
    }
    else if(req.url === "/serverdetails"){
        var os = require("os");
        res.write("Platform: "+ os.platform()+"\n");
        res.write("Architecture: "+ os.arch());             
        res.end();
        
    }
    else if(req.url === "/html/page"){
        var fs = require("fs");
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        
        });
    }
    else if(req.url === "/textme"){
        var fs = require("fs");
        fs.appendFile('textmeter.txt', '\nSudeep P Suseelan', (err) => { 
            if (err) { 
                res.write("faild");
            } 
            else { 
                res.write("Success");

            } 
            res.end();
          }); 
        

    }

})
server.listen(8888);