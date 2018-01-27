
  exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('about', function (table) {
        table.increments().primary
        table.text('aboutInfo')
      })
    ])
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('about')
    ])
  };
