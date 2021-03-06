
  exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('forms').del()
      .then(function () {
        // Inserts seed entries
        return knex('forms').insert([
          {
            formName: 'Registration Form',
            schoolForm: 'https://docs.wixstatic.com/ugd/8f167c_408bbda2f26a4999b7ed3d406bc82e6f.pdf'
          },
          {
            formName: 'Emergency Contact Form',
            schoolForm: 'https://docs.wixstatic.com/ugd/8f167c_59937af39fbc40fb912417a138547f77.pdf'
          },
          {
            formName: 'Emergency Medical Consent Form',
            schoolForm: 'https://docs.wixstatic.com/ugd/8f167c_14e60c2eca9f4ebabef244c7ece83a72.pdf'
          },
          {
            formName: 'General Health Appraisal Form',
            schoolForm: 'https://docs.wixstatic.com/ugd/8f167c_45507647fefb4ea79abfd2717f795c12.pdf'
          },
          {
            formName: 'Immunization Form',
            schoolForm: 'https://docs.wixstatic.com/ugd/8f167c_b53a363ff6324e12bf9978b537689ecf.pdf'
          }
        ]);
      });
  };
