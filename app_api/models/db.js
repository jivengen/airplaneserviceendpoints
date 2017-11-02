var mongoose = require('mongoose');

var connectionstring = "mongodb://cidm4382:cidm4382@ds157624.mlab.com:57624/4382airplane";
mongoose.connect(connectionstring, { useMongoClient: true });

mongoose.Promise = global.Promise;
console.log("promise and connect");
//Bring in your schemas & models
require('./airplane')