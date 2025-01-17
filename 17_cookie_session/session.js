const express = require("express");
const sessions = require("express-session");
const cookie = require("cookie-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use(
  session({
    secret: "secret Key", //필수 env에서 관리할것
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 10 * 60 * 1000,
    },
  })
);

/*
session({
    secret: "secret Key", //서명값 필수 env에서 관리할것
    resave: 세션에 수정사항이 생기지 않더라도 매 요청마다 세션을 다시 저장할지  true /fasle권장
    saveUninitialized: 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 여부 true / fasle 권장
    cookie{} : 세션 쿠기에 대한 설정 cookie.js config 참고
    secure: true 일때는 https 프로토콜에서만 주고받는다
    name: 세션 쿠키의 이름 sessionID값 저장하는 쿠키 이름, default: connect.sid)
  })


*/

app.get("/", (req, res) => {
  res.render("session");
});

// 세션 설정
app.get("/set", (req, res) => {
  // req.session.키이름 = 값
  req.session.name = "엘리";
  console.log(req.session);
  res.send("세션 설정 완료");
});

// 세션 확인
app.get("/get", (req, res) => {
  console.log(req.session);
  console.log(req.sessionID);
  res.send({ id: req.sessionID, name: req.session.name });
});

// 세션 삭제
app.get("/destroy", (req, res) => {
  console.log(req.session);
  req.session.destroy((err) => {
    if (err) throw err;

    res.send("세션삭제완료");
  });
});

app.listen(PORT, () => {
  console.log();
});
