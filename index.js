const http = require("http");
const server = http.createServer((req , res) => {
    if(req.url == '/')
    {
        res.write("Hellow Wold -- !");
        res.end();
    }
    else if(req.url == '/book')
    {
        res.write(JSON.stringify([
            {name:'Fisrst Learing Javascript book'},
            {name:'Last Learing Javascript book'}
        ]));
       res.end();
    }
}) 
const port = (3000);
server.listen(port);
console.log('check to our server',port);