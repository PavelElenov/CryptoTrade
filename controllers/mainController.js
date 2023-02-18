const { login, register } = require("../services/userService");
const errorParser = require("../utils/errorParser");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("home", {
        title:"Home Page - Crypto Web",
    })
})
router.get("/login", (req, res) => {
    res.render("login", {
        title: "Login Page",
    })
});

router.get("/register", (req, res) => {
    res.render("register", {
        title: "Register Page",
    });
})

router.post("/login", async(req, res) => {
    try{
        const token = await login(req.body.email, req.body.password);
        res.cookie("token", token);
        res.redirect("/");
    }catch(err){
        const error = errorParser(err);
        res.render("login", {
            title: "Login Page",
            error,
            body: req.body,
        })
    }
});

router.post("/register", async(req, res) => {
    try{
        const token = await register(req.body.username, req.body.email, req.body.password, req.body.rePassword);
        res.cookie("token", token);
        res.redirect("/");
    }catch(err){
        const error = errorParser(err);
        res.render("register", {
            title: "Register Page",
            error,
            body: req.body,
        })
    }
});

router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
});

module.exports = router;