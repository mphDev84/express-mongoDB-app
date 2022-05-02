//wiki route module from MDN docs

const express = require('express');
const router = express.Router();

// Home page route
router.get('/', function(err, req, res) {
  res.send('Wiki home page');
});

// About page route
router.get('/about', function(req, res) {
  res.send('About this wiki');
});

// Contact page route
router.get('/contact', function(req, res){
    res.send('This is the contact page')
});

module.exports = router;
