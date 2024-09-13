const mongoose = require('mongoose');

require('./connection');

const Orang = require('../collections/orang')

Orang.findOneAndDelete({Name: 'jeremy'}).then(function(){
    console.log('orang kedelete');
}).catch(function(error){
    console.log("error delete orang", error);
});