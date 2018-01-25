
  exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('gallery', function (table) {
        table.increments().primary
        table.string('schoolPic')
      })
    ])
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('gallery')
    ])
  };
