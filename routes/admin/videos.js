const app           = require('../server.js');
const hbs           = require('hbs');//initialize handlebars constant
const dbtools       = require('../database/dbfunctions.js');

app.get('/music', (req,res)=>{
  dbtools.getVideos().then((result)=>{
      res.render('music.hbs',{result});
    }).catch((err)=>{
      res.status(401).send(err);
    });

});


// hbs.registerHelper('videos_list',(videoList)=>{
//   console.log("in helper list is:", JSON.stringify(videoList));
//   var listOnly = videoList.data.root.result;
//   var out = '';
//   for(i=0; i < listOnly.length; i++){
//     out += `<div class='masonry__item col-sm-6 col-xs-12' data-masonry-filter='${listOnly[i].category}'>`;
//     out += `    <div class='video-cover border--round'>`;
//     out += `        <div class='background-image-holder'>`;
//     out += `            <img alt='image' src='img/video/${listOnly[i].image}' />`;
//     out += `        </div>`;
//     out += `        <div class='video-play-icon'></div>`;
//     out += `        <iframe data-src='https://www.youtube.com/embed/${listOnly[i].youtubeID}?autoplay=1' allowfullscreen='allowfullscreen'></iframe>`;
//     out += `    </div>`;
//     out += `    <!--end video cover-->`;
//     out += `    <span class='h4 inline-block'>${listOnly[i].title}</span>`;
//     out += `    <span>${listOnly[i].subTitle}</span>`;
//     out += `</div>`;
//   }
//
//
//     return out;
//
// });
