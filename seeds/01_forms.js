
  exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('forms').del()
      .then(function () {
        // Inserts seed entries
        return knex('forms').insert([
          {
            schoolForm: 'https://docs.wixstatic.com/ugd/8f167c_408bbda2f26a4999b7ed3d406bc82e6f.pdf'
          },
          {
            schoolForm: 'https://docs.wixstatic.com/ugd/8f167c_59937af39fbc40fb912417a138547f77.pdf'
          },
          {
            schoolForm: 'https://docs.wixstatic.com/ugd/8f167c_14e60c2eca9f4ebabef244c7ece83a72.pdf'
          },
          {
            schoolForm: 'https://docs.wixstatic.com/ugd/8f167c_45507647fefb4ea79abfd2717f795c12.pdf'
          },
          {
            schoolForm: 'https://docs.wixstatic.com/ugd/8f167c_b53a363ff6324e12bf9978b537689ecf.pdf'
          }
        ]);
      });
  };
