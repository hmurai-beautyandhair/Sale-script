const router = require("express").Router();
const Shopify = require("shopify-api-node");
const axios = require("axios");
var rp = require('request-promise');
var parseMessage = require('gmail-api-parse-message');
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
const Announcment = require('../models/Announcment.model')
// yesterday.setDate(yesterday.getDate() - 1)
const date = new Date()
console.log(new Date(yesterday.setDate(yesterday.getDate() - 1)))
console.log('1')
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

router.get("/recent-links/:id", (req, res, next) => {
  Track.find({ userId: req.params.id }).then(result => {
    let arr = []
    if(result.length > 0 && result[0] && result[0].links) {
    result[0].links?.map(x =>{
      arr.push(Object.values(x))
    })
    let send = arr.sort((a, b) => b[0]?.index - a[0]?.index).slice(0, 5)
    res.json(result[0].links);
  }
  });
});

//--------------------Announcment--------------------------

router.post("/new-announcment", (req, res) => {
  const name = req.body.name;
  const description = req.body.description;

  const newAnnouncment = new Announcment({
   name,
    description
  });

  newAnnouncment
    .save()
    .then(() => res.json("Announcment added!"))
    .catch(err => res.status(400).json("Error: " + err));
});
router.get("/announcment", (req, res) => {
  Announcment.find()
    .then(links => res.json(links))
    .catch(err => res.status(400).json("Error" + err));
});


//--------------GMAIL----------

const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/gmail.modify'];
const TOKEN_PATH = 'token.json';
fs.readFile('credentials.json', async(err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  let res = await authorize(JSON.parse(content), getRecentEmail);
  console.log('Messages', res)

});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
const token = ''
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listLabels(auth) {
  const gmail = google.gmail({version: 'v1', auth});
  gmail.users.labels.list({
    userId: 'me',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const labels = res.data.labels;
    if (labels.length) {
      console.log('Labels:');
      labels.forEach((label) => {
        console.log(`- ${label.name} : ${label.id}`); 
      });
    } else {
      console.log('No labels found.');
    }
  });
}


// function listMessages(auth) {  
//   return new Promise((resolve, reject) => {    
//     const gmail = google.gmail({version: 'v1', auth});    
//     gmail.users.messages.list(      
//       {        
//         userId: 'me',        
//         q: 'label:inbox subject:culture@wigs.com',      
//       },            (err, res) => {        
//         if (err) {                    reject(err);          
//           return console.log('The API returned an error: ' + err);       
//         } 
//         const mess = res.data;       
//         if (!res.data.messages) {  resolve([]);          
//           return console.log('No messages found');         
//         }               return console.log(res.data)     
//       }    
//     );  
//   })
// }


function getRecentEmail(auth) {
  const gmail = google.gmail({ version: 'v1', auth });
  // Only get the recent email - 'maxResults' parameter
  gmail.users.messages.list({ auth: auth, userId: 'me', maxResults: 1, q: 'label:inbox from:culture@wigs.com'  }, function (err, response) {
      if (err) {
          console.log('The API returned an error: ' + err);
          return;
      }

      // Get the message id which we will need to retreive tha actual message next.
      var message_id = response['data']['messages'][0]['id'];

      // Retreive the actual message using the message id
      gmail.users.messages.get({ auth: auth, userId: 'me', 'id': message_id, }, function (err, response) {
        // 'format':'raw' 
          if (err) {
              console.log('The API returned an error: ' + err);
              return;
          }
           email = response.data
          //  console.log(email.payload.parts[0].parts.data)
console.log(email)
          console.log('email s', email.internalDate)
            rp({
              uri: `https://www.googleapis.com/gmail/v1/users/me/messages/${message_id}?access_token=${auth.credentials.access_token}`,
              json: true
            }).then(function (response) {
              var parsedMessage = parseMessage(response);
              // console.log('PARSED', parsedMessage.textPlain);
              router.get("/gmail", (req, res, next) => {
                
                  res.json({message: parsedMessage.textPlain, time: email.internalDate});
               
              });
            })
   
           
//          let base64string = response?.data?.raw
// let bufferObj = Buffer.from(base64string, "base64"); 
// let decodedString = bufferObj.toString("utf8"); 
// console.log("The decoded string:", decodedString); 
//console.log('"' + data + '" converted from Base64 to ASCII is "' + text + '"');
   
      });
  }); }






module.exports = router;