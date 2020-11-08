const mongoose = require("mongoose");


const itemSchema = new mongoose.Schema({

    name:{
        type:String,
        maxlength:100,
        required:true,
        trim:true,
        unique:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Item',itemSchema);