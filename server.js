//Import express from the package
const express = require("express");

//import any routers that you need
const dataRouter = require("./routes/data.route.js");

//use express to create a server 
const server = express();

//middleware
//Read any request coming in that has JSON data, and makes that 
//data available via the request.body
server.use("/", express.json());

//routing 
//this was moved over to data.route.js


//
//use the imported router
//server.use("/", dataRouter);

// could also use as another option for above since 
// data is being used in all of the examples 
server.use("/data", dataRouter);
//

//tell that server to start listening for incoming request on a
//specified port
server.listen(5557, () => {
    console.log("server started");
})