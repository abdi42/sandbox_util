var sandbox_util = module.exports = function checkObject(obj,expectedKeys,callback){
  for(var i=0;i<expectedKeys.length;i++){
    var key = expectedKeys[i]
    if(!obj[key]){
      var err = new Error(key + " not provided")
      err.status = 400;
      return callback(err);
    }
  }

  return callback(null);
}
