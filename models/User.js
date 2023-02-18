const {Schema, model} = require("mongoose");

// TODO
const schema = new Schema({
    username: {type: String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    boughtCryptos: {type:[Schema.Types.ObjectId],  ref:"Crypto"}
});

const User = model("User", schema);

module.exports = User;