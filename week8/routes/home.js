import express from "express";
import { insertSql } from "../database/sql";
//import를 통해 database/sql.js에서 insertSql이라는 
//모듈을 가져온다.
//데이터베이스에 데이터 삽입을 구현하는 파일이다.
//views폴더의 home.hbs파일과 연동한다.
const router = express.Router();

//express에 있는 router 기능을 쓰니까 express를 import해주고
//여기서 데이터 삽입을 해야 하니까 삽입과 관련된 쿼리함수를
//불러와야 한다.
router.get("/", (req, res) => {
  res.render("home");
});
//render는 home.hbs파일을 찾아서 home.hbs파일의 코드대로
//웹을 꾸며준다.
router.post("/", (req, res) => {
  //값들을 입력하고 삽입을 누르면 그 데이터들을 처리하는 위치가
  //router.post이다.
  //home.hbs에서 post로 값을 넘기기로 정했기 때문에 
  //post를 통해 받아줘야 한다.
  //값들이 어디에 저장되는지 봤더니 req에 데이터들이 저장된다.
  const vars = req.body;
  //데이터가 req.body에 저장된다고 생각하면 된다.
  const var_length = Object.keys(req.body).length;
  //그런데 employee와 department의 데이터들을 불러오는 주소가
  //모두 같은데 어떻게 구분할까?
  //데이터 개수를 var_length에 저장
  //조교님은 길이로 구분하셨는데 나중에 다른 방식으로
  //어떻게 할 지 고민을 해보자
  if (var_length > 4) {
    //var_length가 4보다 크면 employee, 아니면 department로 간다.
    const data = {
      //data라는 객체를 생성하고 데이터들을 담아준다.
      //req.body를 vars에 저장하였기 때문에
      //vars.fname 이런 식으로 만들어야 한다.
      Fname: vars.fname,
      Minit: vars.minit,
      Lname: vars.lname,
      Ssn: vars.ssn,
      Bdate: vars.bdate,
      Address: vars.address,
      Sex: vars.sex,
      Salary: vars.salary,
      Super_ssn: vars.super_ssn,
      Dno: vars.dno,
    };
    insertSql.setEmployee(data);
    //insertSql 모듈에서 setemployee라는 함수에 data라는
    //객체를 넘겨준다. 즉, data가 인자라고 생각하면 된다.
    //그러면 다른 파일에서 data.fname 이런 식으로 데이터를
    //활용할 수 있다.
  } else {
    const data = {
      Dname: vars.dname,
      Dnumber: vars.dnumber,
      Mgr_ssn: vars.mgr_ssn,
      Mgr_start_date: vars.mgr_start_date,
    };
    insertSql.setDepartment(data);
  }
  //department도 employee와 같다.
  //data라는 같은 이름의 객체를 사용했는데 if와 else안에 따로
  //존재하기 때문에 로컬 변수이므로 상관없다.
  res.redirect("/");
});
//redirect는 페이지를 이동하지 않고 새로고침하겠다는 의미다.
module.exports = router;
