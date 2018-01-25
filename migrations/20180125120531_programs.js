

  exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('programs', function (table) {
        table.increments().primary
        table.string('programName')
        table.text('programInfo')
        table.text('programOptions')
      })
    ])
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('programs')
    ])
  };
