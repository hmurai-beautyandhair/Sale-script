const router = require("express").Router();
const Shopify = require("shopify-api-node");
const axios = require("axios");
const today = new Date();
const yesterday = new Date(today);
const Link = require('../models/Link');
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


router.post("/new-link", (req, res) => {
  const url = req.body.url;
  const title = req.body.title;
  const image = req.body.image;
  const description = req.body.description;

  const newLink = new Link({
    url,
    title,
    image,
    description
  });

  newLink
    .save()
    .then(() => res.json("Link added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.get("/all-links", (req, res) => {
  Link.find()
    .then(links => res.json(links))
    .catch(err => res.status(400).json("Error" + err));
});
router.post("/update-list/:id", (req, res) => {
  Link.findById(req.params.id)
    .then(item => {
      console.log('id', item)
    item.url = req.body.url;
 item.title = req.body.title;
  item.image = req.body.image;
  item.description = req.body.description;

      item
        .save()
        .then(() => res.json("List updated"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});
module.exports = router;
