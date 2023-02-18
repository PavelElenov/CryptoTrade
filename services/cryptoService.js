const Crypto = require("../models/Crypto");

const createCrypto = async (data) => {
    if(validateCrypto(data)){
        return await Crypto.create(data);
    }
};

const getAllCryptos = async () => {
    return await Crypto.find().lean();
}

const getCryptoById = async (id) => {
    return await Crypto.findById(id).lean();
}

const deleteCrypto = async(id) => {
    await Crypto.findByIdAndDelete(id);
}

const validateCrypto = (data) => {
    if(data.name.length < 2){
        throw new Error("Name should be at least 2 characters");
    }else if(data.price < 0){
        throw new Error("Price should be a positive number");
    }else if(data.image.split("://")[0] != "http" && data.image.split("://")[0] != "https"){
        throw new Error("Crypto Image should start with https:// or https://");
    }else if(data.description.length < 10){
        throw new Error("Description should be a minimum of 10 characters long");
    }else{
        return true;
    }
}

const editCrypto = async(id, data) => {
    if(validateCrypto(data)){
        await Crypto.findByIdAndUpdate(id, data);
    }
    
}

const searchCrypto = async(name, paymentMethod) => {
    const returnedCryptos = await Crypto.find().lean().then(cryptos => cryptos.filter(crypto => crypto.name.toLowerCase().includes(name.toLowerCase()) && 
    crypto.paymentMethod == paymentMethod));
    
    return returnedCryptos;
}

module.exports = {
    createCrypto,
    getAllCryptos,
    getCryptoById,
    deleteCrypto,
    editCrypto,
    searchCrypto,
}