
  exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('forms', function (table) {
        table.increments().primary
        table.varchar('schoolForm')
      })
    ])
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('forms')
    ])
  };
