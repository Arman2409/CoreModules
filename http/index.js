import {createServer} from 'http';
import path  from 'path';
import fs from 'fs';

const currentFile = path.resolve("/public/index.html")
console.log(currentFile);

const mimeTypes = {
    ".html":"text/html",
    ".css":"text/css",
    ".js":'text/javascript'
}

function filterReq(req,res,next){
    let url = res.url
    if(url === "/"){
        url = "/index.html"
    }

    const filePath = path.resolve('public' + url)
    fs.promises.access(filePath)
    .then(()=>{
        const ext = path.extname(filePath)
        res.writeHead(200,{"Content-Type":mimeTypes[ext]});
        fs.createReadStream(filePath).pipe(res)
    })
    .catch(()=>{
        next()
    });
}

const server = createServer((req,res) => {

    filterReq(req,res,()=>{
        if(req.url === "/hello"){
            res.writeHead(200,{"Content-Type":'text/plain'})
            res.end('Hi!')
        }
        else{
            res.writeHead(404,{'Content-Type':"text/plain"})
            res.end('error,not found!')
        }
    })
})

server.listen(3000)