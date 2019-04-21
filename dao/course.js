const connection = require("./dbutil");

function getCourseByCourseId(courseIdArr, cb) {
    var querySql;
    if (typeof courseIdArr == "string" || (Object.prototype.toString.call(courseIdArr) == "[array Object]" && courseIdArr.length == 1)) {
        querySql = "select course from course where courseId = ?"
    } else {

        for (let i = 0, length = courseIdArr.length; i < length; i++) {
            if (i == 0) {
                querySql = "select course from course where courseId = ?"
            } else {
                querySql = querySql + " or courseId = ?"
            }

        }
    }

    connection.connect();
    connection.query(querySql, courseIdArr, function (err, result) {
        if (err) {
            console.log(err);

        } else {
            console.log(result)
        }

    })

}

getCourseByCourseId([1, 2, 3])