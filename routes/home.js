
var app = require('../server.js');
//test comment

app.get('/',(req,res)=>{
      res.render('index.hbs',{});
  }
);

