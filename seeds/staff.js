
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('staff').del()
    .then(function () {
      // Inserts seed entries
      return knex('staff').insert([
        {
          id: 1000,
          staffName: 'Wendy Shields'
        },
        {
          id: 2000,
          staffName: 'Shannon Lonnegren'
        }
      ]);
    });
};
