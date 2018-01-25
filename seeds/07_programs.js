
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('programs').del()
    .then(function () {
      // Inserts seed entries
      return knex('programs').insert([
        {
          programName: 'Preschool Program',
          programInfo: 'The goal of our preschool program is to help your child discover his/her love of learning and going to school.  Our preschool program closely follows the Boulder Valley School District calendar with some exceptions.  We offer fall, summer, and spring semester programs with various camps being offered during the school year.  The curriculum used by Superior Learning Academy is a customized and structured program that includes Zoo Phonics Reading Program TM, Handwriting Without Tears TM, Math Menus, Science Adventures, Weekly Themes (such as landforms, magnetism, and vertebrates versus invertebrates to name a few), Spanish lessons and Music classes.  We also incorporate a vast amount of extracurricular activities such as musical performances, Valentine’s Day breakfast, and various celebrations (Cinco de Mayo, April fools gold hunt, Field Day, and Graduation all happening during our spring session).',
          programOptions: '5 Day Program:  M-F preschool from 9AM-1PM (with the option of aftercare each day), 3 Day Program:  MWF preschool from 9AM-1PM (with the option of aftercare each day), 2 Day Program:  T/TH preschool from 9AM-1PM (with the option of aftercare each day)'
        },
        {
          programName: 'Aftercare Program',
          programInfo: 'Aftercare is play based with the children doing crafts, games, playtime, snack time, and rest time. After care price is $25 per day.',
          programOptions: 'Aftercare will be offered each day from 1PM-4PM and can be purchased and rolled into preschool tuition prices.  Drop in aftercare will be accepted as well with appropriate paperwork.  '
        }
      ]);
    });
};
