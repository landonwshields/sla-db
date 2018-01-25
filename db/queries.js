const db = require('./connections')

function getStaff() {
  return db('staff').select();
}
function getForms() {
  return db('forms').select();
}
function getSpecials() {
  return db('specials').select();
}
function getGallery() {
  return db('gallery').select();
}


module.exports = {
  getStaff,
  getForms,
  getSpecials,
  getGallery
}
