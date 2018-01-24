
  exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('staff').del()
      .then(function () {
        // Inserts seed entries
        return knex('staff').insert([
          {  
            staffName: 'Wendy Shields',
            staffBio: 'HI!  I\'m Miss Wendy, and I am the owner and director of Superior Learning Academy.  I am pleased to offer a very special preschool program for your child that will enable them to get ready for kindergarten and learn to love school.  I am a graduate of The Pennsylvania State University with a Bachelor of Science degree in Early Childhood Education.  I have been working with children for the last 30 years.  I previously was the Director and teacher at a local preschool where I spent 6 wonderful years teaching, dancing, singing, and laughing with Superior children!  My husband and I live in Superior and have raised three wonderful boys - Landon (29), Britton (26), and Jordon (18).  I am looking forward to meeting your and your family as we all begin this adventure together!  Please feel free to stop by anytime and reach out to me with any questions you may have!',
            staffPic: 'https://static.wixstatic.com/media/8f167c_9b3ce3696a104dc7a460ee863230b1cf.jpg/v1/fill/w_624,h_740,al_c,q_85,usm_0.66_1.00_0.01/8f167c_9b3ce3696a104dc7a460ee863230b1cf.webp'
          },
          {
            staffName: 'Shannon Lonnegren',
            staffBio: 'Hi, I\'m Ms. Shannon! and I am so excited about this new adventure we will be taking together.  I am originally from California, but have made Colorado my home where I have raised my two boys and had a successful career in teaching. I have worked with children for the last decade and  previously worked at a local preschool as an early childhood educator for some of our Superior children.I am highly certified through the state and have my CPR, First Aid and Universal Precautions certifications as well.  My passion in life is to help ready our children to be successful in school, learn to love school and begin their school career on the right foot.   I am sure our preschool program will help your child learn to love school as we sing, dance, play and learn through the day.',
            staffPic: 'https://static.wixstatic.com/media/8f167c_48b054099a0346a1847e346c33ed41ed.jpg/v1/fill/w_570,h_740,al_c,q_85,usm_0.66_1.00_0.01/8f167c_48b054099a0346a1847e346c33ed41ed.webp'
          }
        ]);
      });
  };
