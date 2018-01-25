
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('home').del()
    .then(function () {
      // Inserts seed entries
      return knex('home').insert([
        {
          homeIntro: 'Welcome to Superior Learning Academy! Learn more about our awesome Preschool and we hope to hear from you!'
        }
      ]);
    });
};
