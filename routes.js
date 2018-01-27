var express = require('express');
var router = express.Router();
var queries = require('./db/queries')


//home routes
router.get('/home', function(req,res,next) {
  queries.getHome()
  .then((homeData) => {
    res.json(homeData)
  })
})
router.post('/home', function(req,res,next) {
  queries.addHome(req.body)
  .then((homeData) => {
    res.redirect('/home')
  })
})
router.put('/home/:id', function(req,res,next) {
  var id = req.params.id
  queries.updateHome(id, req.body)
  .then((homeData) => {
    res.redirect('/home')
  })
})

// Completed all routes ^^^^

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

router.get('/contact', function(req,res,next) {
  queries.getContact()
  .then((contactData) => {
    res.json(contactData)
  })
})

router.get('/programs', function(req,res,next) {
  queries.getPrograms()
  .then((programsData) => {
    res.json(programsData)
  })
})

//about routes
router.get('/about', function(req,res,next) {
  queries.getAbout()
  .then((aboutData) => {
    res.json(aboutData)
  })
})
router.post('/about', function(req,res,next) {
  queries.addAbout(req.body)
  .then((aboutData) => {
    res.redirect('/about')
  })
})
router.put('/about/:id', function(req,res,next) {
  var id = req.params.id
  queries.updateAbout(id, req.body)
  .then((aboutData) => {
    res.redirect('/about')
  })
})


module.exports = router
