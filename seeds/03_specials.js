
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('specials').del()
    .then(function () {
      // Inserts seed entries
      return knex('specials').insert([
        {
          specialTitle: 'Paid in Full Discounts',
          specialExplanation: 'Receive the following discounts by paying your child\'s tuition in full:',
          specialExample: 'Pay 1 semester in full and save 5%, Pay 2 semesters in full and save 7.5%, Pay 3 semesters in full and save 10%'
         },
        {
          specialTitle: 'Referral Discounts',
          specialExplanation: 'For each child registered that you refer, receive a $100 discount for both you and your friend.',
          specialExample: 'Refer 1 friend, you get a $100 discount and so does your friend.  Refer 8 friends, you get an $800 discount and each friend receives a $100 discount!'
         }
      ]);
    });
};
