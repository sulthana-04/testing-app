const mongoose = require('mongoose');


const PostSchema=mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    mobile: {
        type: String,
        required:true
    },
    gender: {
        type: String,
        required:true
    },
    state: {
        type: String,
        required:true
    },
    district: {
        type: String,
        required:true
    },
    address: {
        type: String,
        required:true
    },
    
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);