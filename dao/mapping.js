
const connection = require('./dbutil')
function queryCourseId(stuNum,cb) {
    var querySql = "select courseId from studentcoursemapping where stuNum = ?";

    connection.query(querySql, stuNum, function (err, result) {
        if (err){
            console.log(err);
        } else {
            cb(result)
        }
    })


}



module.exports = {
    queryCourseId
}