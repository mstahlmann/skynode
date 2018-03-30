var app = require('../server.js');

app.get('/about', (req,res)=>{
  res.render('aboutme.hbs',{});
});