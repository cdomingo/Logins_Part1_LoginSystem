var mongoose = require('mongoose');
var _ = require('underscore');

var DomoModel;


var DomoSchema = new mongoose.Schema({


});

DomoSchema.methods.toAPI = function() {

};

DomoSchema.statics.findByName = function(name, callback) {

};


DomoModel = mongoose.model('Domo', DomoSchema);


module.exports.DomoModel = DomoModel;
module.exports.DomoSchema = DomoSchema;