//module
// const a = {
//     average:(a,b)=>{
//         console.log((a+b)/2);
//     }};
//     module.exports = a;
//file system
// const fs =require("fs");

// fs.readFile("./sample.txt" ,"utf-8" ,(err,data)=>{
//     if(err)
//     return err;
//     else
//     console.log(data);
// });
const http = require("http");
const fs = require("fs");

const PORT = 2000;
//process.env.PORT
const HostName = "localhost";
const home = fs.readFileSync("./index.html","utf-8");
const notFound = fs.readFileSync("./notFound.html","utf-8");

 const server = http.createServer((req,res)=>{
    if (req.url === "/"){
       return res.end(home);
    }
     if (req.url === "/about"){
       return res.end("<H1>About Page</H1>");
    }
     if (req.url === "/contact"){
      return res.end("<H1>Contact Page</H1>");
     } else {
       return res.end(notFound);
     }
});

server.listen(PORT,HostName,()=>{
    console.log(`server is running on http://${HostName}:${PORT}`);
});
