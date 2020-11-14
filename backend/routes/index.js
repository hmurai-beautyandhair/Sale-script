const router = require("express").Router();
const Shopify = require("shopify-api-node");
const axios = require("axios");
const today = new Date();
const yesterday = new Date(today);
const date = new Date(yesterday.setDate(yesterday.getDate() - 4));
const shopify = new Shopify({
  shopName: "wigs-store",
  apiKey: process.env.KEY,
  password: process.env.PASSWORD
});

router.get("/draft-order", (req, res) => {
  shopify.draftOrder
    .list({
      updated_at_min: new Date(yesterday.setDate(yesterday.getDate() - 79))
    })
    .then(
      metafields => {
        res.json(metafields);
      },
      err => res.status(400).json("Error" + err)
    );
});

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});
router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});
module.exports = router;
