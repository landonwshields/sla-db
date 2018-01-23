var express = require('express');
var router = express.Router();
var queries = require('./db/queries')


router.get('/staff', function(req,res,next) {
  queries.getStaff()
  .then((staffData) => {
    res.json(staffData)
  })
})

module.exports = router
