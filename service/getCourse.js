const studentDao = require('../dao/student');
const mapping = require("../dao/mapping");
const connection = require("../dao/dbutil")

function getCourse(name, cb) {
    if (name && typeof name == "string") {
        //获取学号
        var promise = new Promise(function (res, rej) {
            connection.connect();
            studentDao.queryStuNum(name, function (result) {
                res(result)
            })
        })
        promise.then(function (result) {

            const stuNum = result[0].stuNum;
            return new Promise(function (res, rej) {
                mapping.queryCourseId(stuNum, function (result) {
                    res(result);
                })
            })


        }, function (err) {
            console.log(err);

        }).then(function (result) {
            const temp = [];
            result.forEach( ele => {
                temp.push(ele.courseId)
            })
            return new promise(function (resolve, reject) {


            })


        })
    } else {
        console.log("没查到有该学生");
    }




}

getCourse("小明")