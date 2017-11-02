var mongoose = require('mongoose');

var climbDataSchema = new mongoose.Schema({
    weight: Number,
    vfriFlap5: Number,
    vfriFlap10: Number,
    vfriFlap15 : Number,
    vClmb : Number,
});

var climbData = mongoose.model('climbdata', climbDataSchema);