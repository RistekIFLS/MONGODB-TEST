const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/kumpulan-orang');

mongoose.connection.once('open', function(){
    console.log('koneksi berhasil');
}).on('error', function(){
    console.log('koneksi gagal')
});