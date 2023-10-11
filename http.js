import { createServer } from 'http';

const server=createServer((req,res)=>{
    if(req.url==='/')res.end("This is home page ");
    else if(req.url==='/about')res.end("About");
    else res.end(`
    <h1>Oops !</h1>
    <p>the page your are looking for is not available </p>
    <a href='/' > Back to Home page </a>
    `);
    
})

server.listen(5000);