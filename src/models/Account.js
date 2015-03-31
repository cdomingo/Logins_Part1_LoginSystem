var crypto = require('crypto');
var mongoose = require('mongoose');

var AccountModel;
var iterations = 10000;
var saltLength = 64;
var keyLength = 64;

var AccountSchema = new mongoose.Schema({


});

AccountSchema.methods.toAPI = function() {

};

AccountSchema.methods.validatePassword = function(password, callback) {
    var pass = this.password;
    
    crypto.pbkdf2(password, this.salt, iterations, keyLength, function(err, hash) {
        if(hash.toString('hex') !== pass) {
            return callback(false);
        }
        return callback(true);
    });
};

AccountSchema.statics.findByUsername = function(name, callback) {

};

AccountSchema.statics.authenticate = function(username, password, callback) {

};

AccountModel = mongoose.model('Account', AccountSchema);

module.exports.AccountModel = AccountModel;
module.exports.AccountSchema = AccountSchema;