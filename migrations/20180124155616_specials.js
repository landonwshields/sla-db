
  exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('specials', function (table) {
        table.increments().primary
        table.string('specialTitle')
        table.text('specialExplanation')
        table.text('specialExample')
      })
    ])
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('specials')
    ])
  };
