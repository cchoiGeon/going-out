const mysql = require('mysql');
const db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '111111',
  database : 'userInformation'
});
db.connect();
db.query('SELECT * FROM profile',function(err2,c,d){
    if(err2){
        console.log(err2)
    }
    console.log(c)
})
db.end()