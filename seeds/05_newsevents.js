
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('newsevents').del()
    .then(function () {
      // Inserts seed entries
      return knex('newsevents').insert([
        {
          eventTitle: 'Uprcoming Events',
          eventDescription: 'Valentines Day Tea'
        },
        {
          eventTitle: 'Summer Program',
          eventDescription: 'Superior Learninig Academy offers an exceptional summer program for your child! '
        },
        {
          eventTitle: 'Enroll Now for the Fall 2018 School Year',
          eventDescription: 'Enroll now for your child to experience a love learning through exciting and interactive activities and events throughout the school year.'
        }
      ]);
    });
};
