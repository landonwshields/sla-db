
  exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('home', function (table) {
        table.increments().primary
        table.text('homeIntro')
      })
    ])
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('home')
    ])
  };
