
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contact').del()
    .then(function () {
      // Inserts seed entries
      return knex('contact').insert([
        {
          schoolName: 'Superior Learning Academy',
          schoolAddress: '502 Center Drive, Unit G, Superior, CO 80027',
          schoolEmail: 'info@superiorlearningacademy.com',
          schoolPhone: '303-885-1358'
        }
      ]);
    });
};
