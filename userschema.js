const mongoose = require('mongoose')
const userschema = new mongoose.schema({
    name:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true,},
    password:{type:String,required:true},
    roles:{type:String,default:[]}
})

const user = mongoose.model('user',userschema)