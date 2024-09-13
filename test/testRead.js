const mongoose = require('mongoose');

require('./connection');

const Orang = require('../collections/orang')

Orang.findOne({
    Nama:'jeremy'
}).then(function(results){
    if(results == null){
        console.log('orang gk ada');
    }
    else{
        console.log(results)
    }
}).catch(function(error){
    console.log('ada error', error);
});