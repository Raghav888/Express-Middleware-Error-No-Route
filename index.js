const express = require('express');
const app = express();
const { errorHandler } = require('./middlewares/error-handler.middleware');
const { routeNotFound } = require('./middlewares/route-not-found.middleware');

app.get('/', (req, res) => {
  console.log("Hello")
  res.send("Hi api request")
});


// This route will throw error as getData is not present and then it will call errorHandler middleware
app.get('/two', (req, res, next) => {
  const response = getdata();
});


//Routenot found middle ware and error handler middleware should be always called at end of file
app.use(routeNotFound); // when user hit not existing route, this middleware will be called
app.use(errorHandler); 

app.listen(3000, () => {
  console.log("started")
})
