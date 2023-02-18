const jwt = require("jsonwebtoken");

const secret = "jfai329j2d";

function createToken(data){
    return jwt.sign(data, secret);
}

function verifyToken(token){
    return jwt.verify(token, secret);
}

module.exports = {
    createToken,
    verifyToken,
}