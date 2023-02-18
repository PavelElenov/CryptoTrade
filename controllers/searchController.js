const { getAllCryptos, searchCrypto } = require("../services/cryptoService");

const router = require("express").Router();;

router.get("/", async(req, res) => {
    const cryptos = await getAllCryptos();

    res.render("search", {
        title: "Search Page",
        cryptos,
    })
});

router.post("/", async(req, res) => {
    const {cryptoName, paymentMethod} = req.body;
    const cryptos = await searchCrypto(cryptoName, paymentMethod);

    res.render("search", {
        title: 'Search Page',
        cryptos,
    })
})

module.exports = router;