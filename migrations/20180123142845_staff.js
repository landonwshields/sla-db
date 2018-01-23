
  exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('staff', function (table) {
        table.increments().primary
        table.string('staffName')
      })
    ])
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('staff')
    ])
  };
