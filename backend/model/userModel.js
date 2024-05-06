const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname:{
        type: String,
        required: false,
    },
    gender:{
        type: String,
        required: false,
    },
    ageOrdob:{
        type: String,
        required: false,
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    state : {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('User', userSchema);