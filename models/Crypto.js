const {Schema, model} = require("mongoose");

const schema = new Schema({
    name: {type:String, required:true},
    image: {type:String, required:true},
    price: {type:String, required:true},
    description: {type:String, required:true},
    paymentMethod: {type:String, required:true},
    ownerId: {type: Schema.Types.ObjectId, ref:"User"}
});

const Crypto = model("Crypto", schema);

module.exports = Crypto;