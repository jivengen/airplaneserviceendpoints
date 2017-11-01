var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var connectionstring = "mongodb://cidm4382:cidm4382@ds157624.mlab.com:57624/4382airplane";
mongoose.connect(connectionstring, { useMongoClient: true });

mongoose.Promise = global.Promise;


/*
  "weight": 18000,
    "vfriFlap5": 116,
    "vfriFlap10": 110,
    "vfriFlap15": 107,
    "vClmb": 130
*/

var climbDataSchema = new mongoose.Schema({
    weight: Number,
    vfriFlap5: Number,
    vfriFlap10: Number,
    vfriFlap15 : Number,
    vClmb : Number,
});

var climbdata = mongoose.model('climbdata', climbDataSchema, 'climbdata');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  
  
      climbdata.find({}, function (err,climbdatas){
      if (err){
          return console.error(err);
      }
      
      
      var output = "";
      
    /*  for(var i = 0; i < climbdatas.length; i++){
          console.log(climbdatas[i]);
          output += climbdatas[i].weight + "<br>";
      }*/
      
      climbdatas.forEach(function(climbdata){
           console.log(climbdata.weight);
          output += "Weight: " + climbdata.weight + "<br>";
      })
      
     
      res.render('airplane',  {title: 'Airplane Project', outputs :output})
      
        })

});

module.exports = router;
