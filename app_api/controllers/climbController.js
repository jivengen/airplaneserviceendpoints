var mongoose = require('mongoose');
var climbData = mongoose.model('climbdata');

module.exports.findclimb = function(req, res, next) {
    var weight = req.params.weight;
    climbData.find({"weight" : weight}, function (err,climbdatas){
        if(err){
            return console.error(err);
        }else{
            var output = "";
            climbdatas.forEach(function(climbdata){
                console.log(climbdata);
                output += "Outputs for your weight: " + climbdata + "</br>";
            })
           
        }
         res.render('climb', {title: 'Climb Data', outputs: output})
    })
    
    
    
    /*
    
    climbData.find({})
    var output = climbData.find({"weight" : weight});
    output = climbData.vfriFlap5;
    console.log(output);
    */
    
}