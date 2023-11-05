const http= require('http')
const fs = require('fs')
const port =3000
const hostname= '127.0.0.1'
const server = http.createServer(function(req, 
res){ res.writeHead(200, { 'Content-Type': 
'text/html' })fs.readFile('index.html',
function(error,data)
{
if(error)
{
res.writeHead(404)
res.write('error: file not
found')
}
else
{
res.write(data)
}
})
res.write('Hello Everyone this is your server 007 
responding')res.end()
})
server. listen(port, function(error)
{
if(error)
{
console.log('some error has occured', error)
}
else
{
console.log('server is active and is listening on port : ' + port )
}
}
