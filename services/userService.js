const User = require("../models/User");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/tokenUtil");


async function register(username, email, password, repPass){
    if(repPass != password){
        throw new Error("Passwords don't match");
    }else if(await User.findOne({username:username})){
        throw new Error("Already have user with this username");
    }else if(await User.findOne({email:email})){
        throw new Error("Already have user with this email",);
    }else if(password.length < 5){
        const message = errorMessage("Password", 4);
        throw new Error(message);
    }else if(username.length < 5){
        const message = errorMessage("Username", 5);
        throw new Error(message);
    }else if(email.length < 10){
        const message = errorMessage("Email", 10);
        throw new Error(message);
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


async function login(email, password){
    const user = await User.findOne({email:email});

    if(!user || !await bcrypt.compare(password, user.password)){
        throw new Error("Incorrect email or password");
    }

    return createToken({username:user.username, id: user._id});
};

const errorMessage = (title, characters) => {
    return `${title} must be at least ${characters} characters`;
}

module.exports = {
    register,
    login,
}


