const db = require('./connections')

function getStaff() {
  return db('staff').select();
}
function getSpecials() {
  return db('specials').select();
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

//about queries
function getAbout() {
  return db('about').select();
}
function addAbout(newAbout) {
  return db('about').insert(newAbout);
}
function updateAbout(id, updatedAbout) {
  return db('about').update(updatedAbout).where('id', id);
}

//home queries
function getHome() {
  return db('home').select();
}
function addHome(newHomeIntro) {
  return db('home').insert(newHomeIntro);
}
function updateHome(id, updatedHome) {
  return db('home').update(updatedHome).where('id', id);
}

//gallery queries
function getGallery() {
  return db('gallery').select();
}
function addGallery(newSchoolPic) {
  return db('gallery').insert(newSchoolPic);
}
function updateGallery(id, updatedGallery) {
  return db('gallery').update(updatedGallery).where('id', id);
}

//forms queries
function getForms() {
  return db('forms').select();
}
function addForm(newForm) {
  return db('forms').insert(newForm);
}
function updateForm(id, updatedForm) {
  return db('forms').update(updatedForm).where('id', id);
}

module.exports = {
  getStaff,
  getSpecials,
  getNews,
  getContact,
  getPrograms,
  getAbout,
  addAbout,
  updateAbout,
  getHome,
  addHome,
  updateHome,
  getGallery,
  addGallery,
  updateGallery,
  getForms,
  addForm,
  updateForm
}
