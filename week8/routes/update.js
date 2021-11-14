import express from "express";
import { selectSql, updateSql } from "../database/sql";
//update.js에서는 데이터를 받고 수정 모두 해줘야 하므로
//selectSql, updateSql 모듈을 둘 다 불러와야 한다.
const router = express.Router();

router.get("/employee", async (req, res) => {
  const emp_res = await selectSql.getEmployee();
  res.render("updateEmployee", {
    title: "직원 테이블 갱신",
    emp_res,
  });
});

router.get("/department", async (req, res) => {
  const dept_res = await selectSql.getDepartment();
  res.render("updateDepartment", {
    title: "부서 테이블 갱신",
    dept_res,
  });
});
  //update.js파일에만 /뒤에 employee와 department가 붙는다.
  //내용이 다르기 때문에 서로 다른 주소를 가지는 것이다.
  //어떠한 값들이 있는지 확인하기 위해 get함수 생성
  //select.js파일에서 한 것과는 다르게 emp_res와 dept_res라는
  //이름의 객체를 사용했는데, 이름이 달라도 된다는 것을
  //보여주기 위함이다.
  //render 안에 넣는 것은 hbs파일 이름이다. 당연히
  //같은 data를 활용하는 이름을 넣어줘야 한다.

router.post("/employee", async (req, res) => {
  const vars = req.body;
  console.log(vars.salary);
  const data = {
    salary: vars.salary,
  };
  await updateSql.updateEmployee();
  res.redirect("/select");
});

router.post("/department", async (req, res) => {
  const vars = req.body;
  console.log(vars.dname);
    //데이터가 진짜 넘어왔는지 확인하기 위해 console.log로 활용
    //일단 Dname만 수정하므로 dname만 바꿔준다
  const data = {
    Dname: vars.dname,
  };
  await updateSql.updateDepartment(data);

  res.redirect("/select");
  //redirect는 /select가 되어 있는데 data를 입력하고 수정을
  //누르면 localhost:3000/select로 새로고침이 된다.
});

module.exports = router;

//get은 어떤 값을 받아서 보여주는 것이고,
//post는 데이터를 처리하는 기능을 수행한다고 생각하면 된다.
