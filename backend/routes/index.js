const router = require("express").Router();
const Shopify = require("shopify-api-node");
const axios = require("axios");
const today = new Date();
const yesterday = new Date(today);
// yesterday.setDate(yesterday.getDate() - 1)
const date = new Date()
console.log(new Date(yesterday.setDate(yesterday.getDate() - 1)))
// console.log(new Date(date.setHours( date.getHours() - 10 )))
const shopify = new Shopify({
  shopName: "wigscom",
  apiKey: process.env.KEY,
  password: process.env.PASSWORD
});
// updated_at_min: new Date(yesterday.setDate(yesterday.getDate() - 1))
router.get("/draft-order", (req, res) => {
  shopify.draftOrder
    .list({
      status: 'invoice_sent',
      updated_at_min: new Date(yesterday.setDate(yesterday.getDate() - 1))
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
