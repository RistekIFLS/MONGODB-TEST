const mongoose = require('mongoose');

require('./connection');

const Orang = require('../collections/orang')

Orang.findOneAndUpdate({
    Name: 'jeremy'
},{
    Nama: 'jeremy2'
},{
    returnDocument:'after'
}).then(function(results){
    console.log('orang kebuat',results);
}).catch(function(error){
    console.log("error update orang", error);
});