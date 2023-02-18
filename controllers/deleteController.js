const { deleteCrypto } = require("../services/cryptoService");

const router = require("express").Router();

router.get("/:id", async(req, res) => {
    await deleteCrypto(req.params.id);
    
    res.redirect("/catalog");
});

module.exports = router;