const { buyCrypto } = require("../services/userService");

const router = require("express").Router();

router.get("/:id", async (req, res) => {
    await buyCrypto(req.user.id, req.params.id);
    res.redirect("/catalog");
});

module.exports = router;