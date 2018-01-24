const db = require('./connections')

function getStaff() {
  return db('staff').select();
}
function getForms() {
  return db('forms').select();
}


module.exports = {
  getStaff,
  getForms
}
