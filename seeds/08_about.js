
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('about').del()
    .then(function () {
      // Inserts seed entries
      return knex('about').insert([
        {
          aboutInfo: 'Superior Learning Academy is a state licensed, structured curriculum based preschool that will not only keep your child engaged and entertained, but will help them to love going to school!  We offer morning personalized lessons geared towards your child’s ability and strengths.  Superior Learning Academy aims to teach the “whole” child through engaging, age appropriate activities while following the Core Knowledge curriculum.  We offer highly educated teachers who are trained in helping the social, physical, cognitive and emotional development of the early childhood student.'
        },
        {
          aboutInfo: 'Superior Learning Academy employs highly trained and certified teachers who lead A structured curriculum based on the Core Knowledge theory for children ages 3-5.  Advanced technology is used for the children as well as technology for running the academy.  We are very active in the community, and run school days out camps involving structured play, and advanced crafts, games and activities.  Additional programs including but not limited to music classes, Spanish classes, pathways to healthy living, nutrition, and tech time.'
        },
        {
          aboutInfo: 'The mission of Superior Learning Academy is to offer an alternative to the national "BIG BOX" / “cookie cutter” preschools and provide a nurturing, one on one, engaging preschool that children and parents love.  Our activities are specifically geared toward the early childhood education standards of the state of Colorado.  Our program helps development of the whole child including, their social, emotional, cognitive and physical development.  In addition to the extensive curriculum, Superior Learning Academy offers an engaging after care program 5 days a week, holiday and summer camps, and community service projects.'
        }
      ]);
    });
};
