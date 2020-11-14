const router = require("express").Router();
const Shopify = require("shopify-api-node");
const axios = require("axios");

const shopify = new Shopify({
  shopName: "wigs-store",
  apiKey: process.env.KEY,
  password: process.env.PASSWORD
});

router.get("/draft-order", (req, res) => {
  shopify.draftOrder.list({ limit: 20 }).then(
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
