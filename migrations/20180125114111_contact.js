
  exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('contact', function (table) {
        table.increments().primary
        table.string('schoolName')
        table.string('schoolAddress')
        table.string('schoolEmail')
        table.string('schoolPhone')
      })
    ])
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('contact')
    ])
  };
