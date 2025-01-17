// TODO: 라우트 설정
const express = require("express");
const router = express.Router();
const controller = require("../controller/Cindex");

// GET /user, 메인페이지 요청
router.get("/", controller.index);
router.get("/login", controller.login);
router.get("/signup", controller.signup);

router.post("/login", controller.auth_login);
router.post("/signup", controller.create_signup);
router.post("/logout", controller.logout);

module.exports = router;
