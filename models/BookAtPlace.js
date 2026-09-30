const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookAtPalceSchema = new Schema({
    book: { type: mongoose.Schema.Types.ObjectId,ref:'Book',required:true},
    pinCode:{type:String},
    isAvailable:{type: Boolean, default:false }
},{timestamps:true})
moduke.exports = mongoose.model('BookAtPlace',bookAtPalceSchema)