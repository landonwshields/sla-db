
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gallery').del()
    .then(function () {
      // Inserts seed entries
      return knex('gallery').insert([
        {
          schoolPic: 'https://www.superiorlearningacademy.com/gallery?lightbox=dataItem-iqvioynl'
        },
        {
          schoolPic: 'https://www.superiorlearningacademy.com/gallery?lightbox=dataItem-iqvioynm'
        },
        {
          schoolPic: 'https://www.superiorlearningacademy.com/gallery?lightbox=dataItem-iqvioynm1'
        },
        {
          schoolPic: 'https://www.superiorlearningacademy.com/gallery?lightbox=dataItem-iqvioynm2'
        },
        {
          schoolPic: 'https://www.superiorlearningacademy.com/gallery?lightbox=dataItem-iqvioynm3'
        },
        {
          schoolPic: 'https://www.superiorlearningacademy.com/gallery?lightbox=dataItem-iqvioynn'
        }
      ]);
    });
};
