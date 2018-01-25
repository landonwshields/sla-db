var express = require('express');
var router = express.Router();
var queries = require('./db/queries')


router.get('/staff', function(req,res,next) {
  queries.getStaff()
  .then((staffData) => {
    res.json(staffData)
  })
})
router.get('/forms', function(req,res,next) {
  queries.getForms()
  .then((formData) => {
    res.json(formData)
  })
})
router.get('/specials', function(req,res,next) {
  queries.getSpecials()
  .then((specialData) => {
    res.json(specialData)
  })
})
router.get('/gallery', function(req,res,next) {
  queries.getGallery()
  .then((galleryData) => {
    res.json(galleryData)
  })
})
router.get('/news', function(req,res,next) {
  queries.getNews()
  .then((newsData) => {
    res.json(newsData)
  })
})

module.exports = router
