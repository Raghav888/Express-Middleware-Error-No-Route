function errorHandler(error, request, response, next) {
  console.log(`error ${error}`) // log the error
  const status = error.status || 400
  response.status(status).send(error.message)
};

module.exports = { errorHandler };