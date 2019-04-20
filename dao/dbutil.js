const mysql = require('mysql');

var conection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'A935364758',
    database : 'blogproject'
});
//从单一原则上来讲, 可以定义好多函数;每个函数留着一个接口, 供查询用

module.exports = conection ;