const { verifyToken } = require("../utils/tokenUtil");

module.exports = () => (req, res, next) => {
    if(req.cookies.token){
        const user = verifyToken(req.cookies.token);
        res.locals.user = user;
        req.user = user;
    }

    next();
};