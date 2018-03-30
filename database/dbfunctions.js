var {connection}      = require('./mysqlconnect.js');

module.exports = {
  getVideos:(login,delay=0)=>{
    return new Promise((resolve,reject)=>{
        connection.query('SELECT * from video;',(error, results, fields)=>{

          if (error){
            return reject(error);
          }
          resolve(results);
        });


    });
  }
}