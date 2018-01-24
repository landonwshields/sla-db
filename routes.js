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

module.exports = router
