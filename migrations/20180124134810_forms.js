
  exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('forms', function (table) {
        table.increments().primary
        table.varchar('registrationForm')
        table.varchar('emergencyContactForm')
        table.varchar('emergencyMedicalConsent')
        table.varchar('generalHealthForm')
        table.varchar('immunizationForm')
      })
    ])
  };
 
  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('forms')
    ])
  };
