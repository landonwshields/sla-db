var express = require('express');
var router = express.Router();
var queries = require('./db/queries')


router.get('/locations', function(req,res,next) {
  queries.getPlaces()
  .then((locationData) => {
    res.json(locationData)
  })
})

// router.get('/reviews', function(req,res,next) {
//   queries.getReview()
//   .then((reviewData) => {
//     res.json(reviewData)
//   })
// })
//
//
// router.post('/reviews', function(req,res,next) {
//   queries.newReview( req.body)
//   .then((reviewNewData) =>{
//     res.json(reviewNewData)
//   })
// })




module.exports = router
