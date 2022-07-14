const mongoose=require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const boardSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    stage:{
        type:Number,
        default:1
    }
})

boardSchema.plugin(AutoIncrement, {inc_field: 'id'});
module.exports=new mongoose.model('Board',boardSchema);