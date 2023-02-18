const { createCrypto } = require("../services/cryptoService");
const errorParser = require("../utils/errorParser");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("create", {
        title: "Create Page",
    })
});

router.post("/", async (req, res) => {
    try{
        const data = {...req.body, ownerId: req.user.id};
        await createCrypto(data);
        res.redirect("/");
    }catch(err){
        const error = errorParser(err);
        res.render("create", {
            title: "Create Page",
            body: req.body,
            error
        })
    }
});


module.exports = router;