function routeNotFound(req,resp,next){
  resp.status(404).json({failed: 'no such route exist'});
}

module.exports={routeNotFound}