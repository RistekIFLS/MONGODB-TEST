require('./connection')
const Orang = require('../collections/orang')

var newOrang = new Orang({
    Nama: 'jeremy',
    Umur: '18',
    TanggalLahir: '20 juni 2001'
})

newOrang.save().then(function(callback){
    console.log('Orang berhasil dibuat')
    callback;
}).catch(function(error){
    console.log('gagal');
}); 