var mongoose = require('mongoose');
var climbData = mongoose.model('climbdata');

module.exports.findPlane = function(req, res, next) {

      climbData.find({}, function (err,climbdatas){
        if (err){
            return console.error(err);
        }else{
            var output = "";
            climbdatas.forEach(function(climbdata){
           console.log(climbdata.weight);
          output += "Weight: " + climbdata.weight + "<br>";
        
      })
        }
      
      

      
      
    
      res.render('airplane',  {title: 'Airplane Project', outputs :output})

})};
    
