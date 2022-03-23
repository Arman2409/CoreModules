import {createServer} from 'http';

const server = createServer((request,response)=>{
     response.writeHead(200,{"Content-Type":"text/plain"})
     response.end('Hello')
})

server.listen(300)