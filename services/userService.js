const User = require("../models/User");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/tokenUtil");

// TODO
async function register(username, email, password, repPass){
    if(repPass != password){
        throw new Error("Passwords don't match");
    }else if(await User.findOne({username:username})){
        throw new Error("Already have user with this username");
    }else if(await User.findOne({email:email})){
        throw new Error("Already have user with this email",);
    }else if(password.length < 5){
        throw new Error("Password must be at least 5 chars");
    }else if(!/^[a-zA-Z0-9]+$/.test(password)){
        throw new Error("Password must consist only english letters and digits");
    }else{
        const hashedPass = await bcrypt.hash(password, 9);
        const user = await User.create({
            username,
            email,
            password: hashedPass,
        });

        const token = createToken({username:user.username, id:user._id});
        return token;
    }
};

// TODO 
async function login(email, password){
    const user = await User.findOne({email:email});

    if(!user || !await bcrypt.compare(password, user.password)){
        throw new Error("Incorrect email or password");
    }

    return createToken({username:user.username, id: user._id});
};

module.exports = {
    register,
    login,
}


