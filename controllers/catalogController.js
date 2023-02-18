const { getAllCryptos } = require("../services/cryptoService");

const router = require("express").Router();

router.get("/", async (req, res) => {
    const cryptos = await getAllCryptos();
    
    res.render("catalog", {
        title: "Catalog Page",
        cryptos,
    })
});

module.exports = router;