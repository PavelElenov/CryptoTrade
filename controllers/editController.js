const { editCrypto, getCryptoById } = require("../services/cryptoService");
const errorParser = require("../utils/errorParser");

const router = require("express").Router();

router.get("/:id", async(req, res) => {
    const crypto = await getCryptoById(req.params.id);
    res.render("edit", {
        title: "Edit Page",
        crypto,
    })
})
router.post("/:id", async(req, res) => {
    try{
        await editCrypto(req.params.id, req.body);

        res.redirect("/catalog");
    }catch(err){
        const error = errorParser(err);

        res.render("edit", {
            title: "Edit Page",
            crypto: req.body,
            error
        })
    }
});

module.exports = router;