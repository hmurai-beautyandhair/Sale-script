const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Track = require('../models/Track.models')
const passport = require('../config/passport');

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then((user) => { 
        req.login(user, function(err,result){
          res.status(201).json(user)
        })
    })
    .catch((err) => { 
      console.log(err)
      res.status(500).json({ err })
    });
});


//return await service.get('/is-logged-in');
router.get('/is-logged-in', (req, res, next) => {  
  res.json(req.user)
})


router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  res.status(200).json(user);
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});
router.post("/track", isAuth, (req, res, next) => {
  Track.create(req.body).then(track => {
   console.log('New track', track)
  }).catch(error => res.json({ error }));
});
router.post("/track/:id", (req, res, next) => {
  Resume.findById(req.params.id).then(result => {
    result.education.unshift(req.body);
    result.save((err, doc) => {
      if (err) throw err;
      res.json(doc);
    });
  });
});


function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
