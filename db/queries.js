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
function getNews() {
  return db('newsevents').select();
}
function getContact() {
  return db('contact').select();
}
function getPrograms() {
  return db('programs').select();
}
function getAbout() {
  return db('about').select();
}
function getHome() {
  return db('home').select();
}


module.exports = {
  getStaff,
  getForms,
  getSpecials,
  getGallery,
  getNews,
  getContact,
  getPrograms,
  getAbout,
  getHome
}
