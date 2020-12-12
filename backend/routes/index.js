const router = require("express").Router();
const Shopify = require("shopify-api-node");
const axios = require("axios");
const today = new Date();
const yesterday = new Date(today);
const Link = require('../models/Link');
const Inventory = require('../models/Inventory.model')
const Marketing = require('../models/Marketing.model')
const Newhire = require('../models/NewHire.model')
const Accounting = require('../models/Accounting.model')
const IT = require('../models/IT.model')
const EllenWille = require('../models/Ellen.Wille.model')
const Track = require('../models/Track.models')
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


//------------INVENTORY------------------
router.post("/new-link-inventory", (req, res) => {
  const url = req.body.url;
  const title = req.body.title;
  const image = req.body.image;
  const description = req.body.description;

  const newInventory = new Inventory({
    url,
    title,
    image,
    description
  });

  newInventory
    .save()
    .then(() => res.json("Link added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.get("/all-links-inventory", (req, res) => {
  Inventory.find()
    .then(links => res.json(links))
    .catch(err => res.status(400).json("Error" + err));
});
router.post("/update-list-inventory/:id", (req, res) => {
  Inventory.findById(req.params.id)
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


//------------MARKETING------------------
router.post("/new-link-marketing", (req, res) => {
  const url = req.body.url;
  const title = req.body.title;
  const image = req.body.image;
  const description = req.body.description;

  const newMarketing = new Marketing({
    url,
    title,
    image,
    description
  });

  newMarketing
    .save()
    .then(() => res.json("Link added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.get("/all-links-marketing", (req, res) => {
  Marketing.find()
    .then(links => res.json(links))
    .catch(err => res.status(400).json("Error" + err));
});
router.post("/update-list-marketing/:id", (req, res) => {
  Marketing.findById(req.params.id)
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


//------------NEWHIRE------------------

router.post("/new-link-newhire", (req, res) => {
  const url = req.body.url;
  const title = req.body.title;
  const image = req.body.image;
  const description = req.body.description;

  const newNewhire = new Newhire({
    url,
    title,
    image,
    description
  });

  newNewhire
    .save()
    .then(() => res.json("Link added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.get("/all-links-newhire", (req, res) => {
  Newhire.find()
    .then(links => res.json(links))
    .catch(err => res.status(400).json("Error" + err));
});
router.post("/update-list-newhire/:id", (req, res) => {
  Newhire.findById(req.params.id)
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


//--------------ACCOUNTING------------------

router.post("/new-link-accounting", (req, res) => {
  const url = req.body.url;
  const title = req.body.title;
  const image = req.body.image;
  const description = req.body.description;

  const newAccounting = new Accounting({
    url,
    title,
    image,
    description
  });

  newAccounting
    .save()
    .then(() => res.json("Link added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.get("/all-links-accounting", (req, res) => {
  Accounting.find()
    .then(links => res.json(links))
    .catch(err => res.status(400).json("Error" + err));
});
router.post("/update-list-accounting/:id", (req, res) => {
  Accounting.findById(req.params.id)
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

//--------------------IT------------------

router.post("/new-link-it", (req, res) => {
  const url = req.body.url;
  const title = req.body.title;
  const image = req.body.image;
  const description = req.body.description;

  const newIT = new IT({
    url,
    title,
    image,
    description
  });

  newIT
    .save()
    .then(() => res.json("Link added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.get("/all-links-it", (req, res) => {
  IT.find()
    .then(links => res.json(links))
    .catch(err => res.status(400).json("Error" + err));
});
router.post("/update-list-it/:id", (req, res) => {
  IT.findById(req.params.id)
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

//--------------------ELLEN_WILLE------------------

router.post("/new-link-ellen", (req, res) => {
  const url = req.body.url;
  const title = req.body.title;
  const image = req.body.image;
  const description = req.body.description;

  const newEllenWille = new EllenWille({
    url,
    title,
    image,
    description
  });

  newEllenWille
    .save()
    .then(() => res.json("Link added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.get("/all-links-ellen", (req, res) => {
  EllenWille.find()
    .then(links => res.json(links))
    .catch(err => res.status(400).json("Error" + err));
});

router.post("/update-list-ellen/:id", (req, res) => {
  EllenWille.findById(req.params.id)
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
router.get("/track-links/:id", (req, res, next) => {
  Track.find({ userId: req.params.id }).then(result => {
    res.json(result[0]);
  });
});


router.post("/add_newlink/:id/:link_id", (req, res, next) => {
  Track.findById(req.params.id).then(result => {
    if(result.links.filter(x => req.params.link_id in x).length > 0) {
      let index = 0;
      result.links.filter((x, i) => {
        if(req.params.link_id in x) index = i;
      })
      result.links.splice(index, 1)
    }

  result.links.unshift(req.body);
     console.log("LINKS")
      // result.links.unshift(req.body);
    
    // idS.filter((x) => _id in x)[0]?.[_id];
    result.save()
    .then(() => res.json(req.body))
    .catch(err => res.status(400).json("Error: " + err));
  })
  .catch(err => res.status(400).json("Error: " + err));
});


module.exports = router;