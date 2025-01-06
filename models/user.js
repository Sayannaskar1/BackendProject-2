const mongoose=require('mongoose');

mongoose.connect(`mongodb://localhost:27017/new_DB`);
const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String,
    age:Number,
    password:String,
    posts:[
    {type:mongoose.Schema.Types.ObjectId,
    ref:'post'}],

    profilepicture:{
    type:String,
    default:"deault.jpg"}

});
module.exports=mongoose.model('user',userSchema);