var app = require('../../server.js');
const config = require('../../config/main.js');
var Client = require('node-rest-client').Client;
var client = new Client();
var cookieParser = require('cookie-parser');
app.use(cookieParser());//set express framework

app.get(config.routeApi + '/registercookie',(req,res)=>{
  console.log("login started");
      console.log(req.cookies);
      // var args = {
      //     data: { username: "mstahlmann", password:"Titus115!"},
      //     headers: { "Content-Type": "application/json" }
      // };
      //res.render('admin/login.hbs',{});
      //client.post("http://172.17.0.2/api/login",args, function (data, response) {
      // parsed response body as js object
      //console.log(data.token);
      // raw response
      //console.log(response);

//});

  }
);
