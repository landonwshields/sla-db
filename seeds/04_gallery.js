
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gallery').del()
    .then(function () {
      // Inserts seed entries
      return knex('gallery').insert([
        {
          schoolPic: 'https://static.wixstatic.com/media/8f167c_1332e1feedfd49bdbffe12df6746a7b4~mv2_d_2448_3264_s_4_2.jpg/v1/fill/w_514,h_690,al_c,q_80,usm_0.66_1.00_0.01/8f167c_1332e1feedfd49bdbffe12df6746a7b4~mv2_d_2448_3264_s_4_2.webp'
        },
        {
          schoolPic: 'https://static.wixstatic.com/media/8f167c_c61f1847533149a7885a56c4653bc1ea~mv2_d_2448_3264_s_4_2.jpg/v1/fill/w_520,h_694,al_c,q_85,usm_0.66_1.00_0.01/8f167c_c61f1847533149a7885a56c4653bc1ea~mv2_d_2448_3264_s_4_2.webp'
        },
        {
          schoolPic: 'https://static.wixstatic.com/media/8f167c_570d6dcdd7f84df0ac372fcc57cb3fbd~mv2_d_2448_3264_s_4_2.jpg/v1/fill/w_504,h_676,al_c,q_80,usm_0.66_1.00_0.01/8f167c_570d6dcdd7f84df0ac372fcc57cb3fbd~mv2_d_2448_3264_s_4_2.webp'
        },
        {
          schoolPic: 'https://static.wixstatic.com/media/8f167c_5b9ceb6252464700b2dbc47efaa6f59e~mv2_d_2448_3264_s_4_2.jpg/v1/fill/w_496,h_662,al_c,q_80,usm_0.66_1.00_0.01/8f167c_5b9ceb6252464700b2dbc47efaa6f59e~mv2_d_2448_3264_s_4_2.webp'
        },
        {
          schoolPic: 'https://static.wixstatic.com/media/8f167c_5f8702366a334b94bfa095dc39ca2061~mv2_d_2448_3264_s_4_2.jpg/v1/fill/w_484,h_646,al_c,q_80,usm_0.66_1.00_0.01/8f167c_5f8702366a334b94bfa095dc39ca2061~mv2_d_2448_3264_s_4_2.webp'
        },
        {
          schoolPic: 'https://static.wixstatic.com/media/8f167c_0ff00e271dac4926914536b5380926a5~mv2.jpg/v1/fill/w_494,h_660,al_c,q_80,usm_0.66_1.00_0.01/8f167c_0ff00e271dac4926914536b5380926a5~mv2.webp'
        }
      ]);
    });
};
