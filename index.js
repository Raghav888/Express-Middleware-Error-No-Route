const express = require('express')
const app = express()


// Its our own created middelware, that will be called everytime, when  any endpoint is called.
// Middleware will be called first and then next() will call the route that is requested
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next(); // If we remove next(), then the requested route wont be called 
  // So next() calls the next middleware/ route/etc.
  // If we dont call next() then the request will be hanging.
})

app.get('/',(req,res)=>{
  console.log("Hello")
  res.send("Hi api request")
})

app.listen(3000,()=>{
  console.log("started")
})

// In similar we can write middleware, that can be used for only when specifc route is called, with routers, with array of functions to be executed, error handling, etc.

// with router

// app.use('route',middlewarefunction,routerConst)

// https://expressjs.com/en/guide/using-middleware.html