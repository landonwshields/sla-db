
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gallery').del()
    .then(function () {
      // Inserts seed entries
      return knex('gallery').insert([
        {
          schoolPic: './public/sla_pic1.webp'
        },
        {
          schoolPic: 'public/sla_pic2.webp'
        },
        {
          schoolPic: 'public/sla_pic3.webp'
        },
        {
          schoolPic: 'public/sla_pic4.webp'
        },
        {
          schoolPic: 'public/sla_pic5.webp'
        },
        {
          schoolPic: 'public/sla_pic6.webp'
        },
        {
          schoolPic: 'public/sla_pic7.webp'
        }
      ]);
    });
};
