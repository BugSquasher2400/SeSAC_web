// TODO: DB(mysql) 연결
const mysql = require("mysql2");
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "user",
  password: "xzrjs1589",
  database: "sesac",
});
// TODO: 모델 코드

// 회원가입
exports.signup = (data, cb) => {
  console.log(data);
  conn.query(
    `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.nickname}', '${data.password}');`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      cb(rows);
    }
  );
};

// 로그인처리
exports.signin = (data, cb) => {
  conn.query(
    `SELECT userid, name FROM user WHERE userid ="${data.userid}" AND pw="${data.pw}";`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log("DB응답", rows);

      cb(rows[0]);
    }
  );
};

// 유저 정보가져오기
exports.profile = (data, cb) => {
  console.log("db", data);
  conn.query(
    `SELECT userid, pw, name FROM user WHERE userid ="${data}"`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log("DB응답", rows);

      cb(rows[0]);
    }
  );
};