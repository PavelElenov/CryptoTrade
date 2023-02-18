const { getCryptoById } = require("../services/cryptoService");
const { getUserById } = require("../services/userService");

const router = require("express").Router();

router.get("/:id", async (req, res) => {
    const crypto = await getCryptoById(req.params.id);

    if(req.user){
        const user = await getUserById(req.user.id);
        var isOwner = crypto.ownerId.equals(user._id);
        var isBought = false;

        for(let cryptoId of user.boughtCryptos){
            if(cryptoId.equals(crypto._id)){
                isBought = true;
                break;
            }
        }
    }

    res.render("details", {
        title: "Details Page",
        crypto,
        isBought,
        isOwner,
    })
});


module.exports = router;