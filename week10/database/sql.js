import mysql from "mysql2";

//database 연결

const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: "localhost",
    user: "root",
    database: "week_10",
    password: "1111",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);
//async / await 사용
const promisePool = pool.promise();

//select query
//async 존재시 await가 끝날때 까지 wait해주겠다.
export const selectSql = {
  //'/select'
  getUsers: async () => {
    //User query 선택
    const [rows] = await promisePool.query(`select * from user`);
    console.log(rows);
    return rows;
  },
  getDepartment: async () => {
    //Department query 선택
    const [rows] = await promisePool.query(`select * from department`);
    return rows;
  },
  getBook: async () => {
    //Book query 선택
    const [rows] = await promisePool.query(`select * from Book`);
    return rows;
  },
};

//delete query
//조건을 설정해 줘야 함 where
export const deleteSql = {
  deleteDepartment: async (data) => {
    console.log("deleteSql.deleteDepartment:", data.Dnumber); //'/update/department'
    //where 조건을 만족하는 행에 대해서 Dname 수정
    const sql = `delete from department where Dnumber = "${data.Dnumber}"`;
    await promisePool.query(sql);
  },
  deleteBook: async (data) => {
    console.log("deleteSql.deleteBook:", data.Bid); //'delete/book'
    const sql = `delete from Book where Bid = "${data.Bid}"`;
    await promisePool.query(sql);
  },
};