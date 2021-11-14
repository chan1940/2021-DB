import mysql from "mysql2";

//삽입, 업데이트, 조회 세 가지 기능 모두 구현해야해서
//코드가 길다.

const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: "localhost",
    user: "root",
    database: "week8",
    password: "1111",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);
//database와 연결하는 부분이다.

//async는 끝날 때까지 기다려준다는 의미 동기화해주는 것이라고
//생각하면 된다. 
const promisePool = pool.promise();

export const selectSql = {
  getEmployee: async () => {
    const [rows] = await promisePool.query(`select * from employee`);
    console.log(rows);
    return rows;
  },
  getDepartment: async () => {
    const [rows] = await promisePool.query(`select * from department`);
    return rows;
  },
};
//select같은 경우엔 데이터를 받지 않음. 입력된 값을
//뿌려주기만 하는 것이기 때문에


export const insertSql = {
  setEmployee: async (data) => {
    //insert같은 경우 따로 리턴할 건 없고 어떤 데이터를
    //입력해야 하는지 data를 받아야 한다.
    const sql = `insert into employee values(
            "${data.Fname}","${data.Minit}","${data.Lname}","${data.Ssn}", "${data.Bdate}","${data.Address}","${data.Sex}","${data.Salary}
            ","${data.Super_ssn}","${data.Dno}")`;
    await promisePool.query(sql);
  },
    //sql은 쿼리라고 생각하면 된다. ` `: 이것은 하나의 문자열을
    //의미하는데, 사이에 변수를 사용할 수 있다는 점이 " "과
    //다르다.
    //employee table에 위 값들을 넣어준다는 의미이다.
    //promisepool에서 query함수를 실행하면 sql이라는 것을
    //query가 실행한다. insert문이라 되돌려 주는 것이 없기
    //때문에 query함수 실행까지만 하고 종료된다.
  setDepartment: async (data) => {
    const sql = `insert into department values(
            "${data.Dname}","${data.Dnumber}","${data.Mgr_ssn}","${data.Mgr_start_date}")`;
    await promisePool.query(sql);
  },
};
//department도 employee와 내용은 일치한다.

export const updateSql = {
  updateEmployee: async (data) => {
    const sql = `update employee set salary = 500 where Dno = "1" and Fname= "고"`;
    //where문을 활용하여 data값을 변경할 수 있다.
    //Fname에 고를 가지고, Dno가 1인 사람의 salary를
    //변경한다는 코드이다.
    await promisePool.query(sql);
  },
  updateDepartment: async (data) => {
    const sql = `update department set dname = "${data.Dname}"where Dnumber="2"`;
    await promisePool.query(sql);
  },
};
//서로 다른 테이블을 부여하기 때문에 복붙해서 두 개를 만든다.
