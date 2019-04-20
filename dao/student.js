var connection = require('./dbutil');

function queryStuNum(stuname) {
    if (stuname && typeof stuname == "string") {
        var query = "select stuNum from student where name='" + stuname + "'";
        var promise = new Promise(function (res, rej) {

            connection.connect();
            connection.query(query, function (err, result) {
                if (err) {
                   rej(err)
                } else {
                    // console.log(result[0].stuNum);
                    res(result[0].stuNum)
                }
            })

        })

        promise.then(function (stuNum) {
            return new Promise(function (resolve, reject) {
                var courseQuery = "select courseId from studentcoursemapping where stuNum=" + stuNum;
                connection.query(courseQuery, function (err, result) {
                    if(err){
                        console.log(err);
                    }else{
                        resolve(result)
                    }
                });

            })

        },function () {
            console.log(err)
        }).then(function (result) {
            var arr = [];
            var queryCourse = "select course from course where courseId=";
            for(var i = 0; i < result.length; i++){
                if(i == 0){
                    queryCourse += result[0].courseId;
                }else {
                    queryCourse = queryCourse + " or courseId=" + result[i].courseId;
                }
            }
            connection.query(queryCourse, function (err, result) {
                if(err){
                    console.log(err)
                }else {
                   result.forEach(ele =>{
                        arr.push(ele.course)
                    })
                    console.log(arr)
                }
            })
            connection.end()
        },function (err) {
            
        })
    }else {
        var errStr = "请输入正确格式的姓名";
        console.log(errStr);
    }
}




queryStuNum("小明")



