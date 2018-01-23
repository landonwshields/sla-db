const db = require('./connections')

function getStaff() {
  return db('staff').select();
}


module.exports = {
  getStaff
}
