import express from "express";
import { selectSql } from "../database/sql";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", async (req, res) => {
  const vars = req.body;
  const users = await selectSql.getUsers(); //sql.js의 getUsers를 받아옴
  let whoAmI = ""; //내가 누구인지 담을 변수
  let checklogin = false; //login 성공여부를 check하는 부분
  users.map((user) => {
    console.log(user.Id);
    if (vars.id === user.Id && vars.password === user.Password) {
      //Id와 Password가 table과 동일하다면
      //field가 대문자
      console.log("login success!"); //로그인 성공
      checklogin = true;
      if (vars.id === "admin") {
        //admin이라면
        whoAmI = "admin"; //나는 admin
      } else {
        //아니라면
        whoAmI = "user"; //user임
      }
    }
  });
  if (checklogin && whoAmI === "admin") {
    //login성공이고 내이름이 admin이라면
    res.redirect("/select");
  } else if (checklogin && whoAmI === "user") {
    //login성공이고 내이름이 user이라면
    res.redirect("/reserve"); //'/select'로 갈 것
  } else {
    //아니라면
    console.log("login failed");
    res.send(
      "<script>alert('로그인에 실패했습니다.'); location.href='/';</script>" //로그인 실패 창 띄우기
    );
  }
});
module.exports = router;