
  exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('newsevents', function (table) {
        table.increments().primary
        table.string('eventTitle')
        table.text('eventDescription')                        
      })
    ])
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('newsevents')
    ])
  };
