import express from "express";
//여기서도 당연히 router사용하므로 express 모듈 필요
import { selectSql } from "../database/sql";
//selectSql을 사용할 것이니까 database/sql.js에서 import
const router = express.Router();
// /는 사이트를 넘어갈 때 활용하는 것인데, select.js에서
//활용하는 /는 /select이다.
router.get("/", async function (req, res) {
  const employee = await selectSql.getEmployee();
  //selectSql.getEmployee를 활용하여 employee에 저장한다.
  const department = await selectSql.getDepartment();
  //selectSql.department를 활용하여 department에 저장한다.
  
  res.render("select", {
    title1: "직원테이블",
    title2: "부서테이블",
    employee,
    department,
  });
  //render는 hbs파일과 연동을 해주는 역할을 한다.
  //render안에 있는 employee와 department에 방금 위에서
  //저장한 데이터를 넘겨준다.
});

module.exports = router;
