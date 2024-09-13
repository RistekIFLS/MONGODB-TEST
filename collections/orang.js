const mongoose = require('mongoose')

const OrangStruct = new mongoose.Schema({
    Nama: String,
    Umur: String,
    TanggalLahir: String,
});

const Orang = mongoose.model('orang', OrangStruct);

module.exports = Orang;