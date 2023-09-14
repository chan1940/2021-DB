import mysql from "mysql2";


const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: "localhost",
    user: "root",
    database: "finaltest",
    password: "1111",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);

const promisePool = pool.promise();

export const selectSql = {
  getUsers : async () => {
    const [rows] = await promisePool.query(`select * from user`);
    return rows;
  },
  getAIRPORT: async () => {
    const [rows] = await promisePool.query(`select * from AIRPORT`);
    return rows;
  },
  getAIRPLANE: async () => {
    const [rows] = await promisePool.query(`select * from AIRPLANE`);
    return rows;
  },
  getFLIGHT: async () => {
    const [rows] = await promisePool.query(`select * from FLIGHT`);
    return rows;
  },
  getSCHEDULE: async () => {
    const [rows] = await promisePool.query(`select * from SCHEDULE`);
    return rows;
  },
  getSEAT: async () => {
    const [rows] = await promisePool.query(`select flight_no as f1, leg_no as n1, date as d1, seat_number as s1,
    customer_name as c1, customer_phone as c2 from SEAT`);
    return rows;
  },
  
};
//select

export const insertSql = {
  insertAIRPORT: async (data) => {
    console.log(111)
    const sql = `insert into AIRPORT values(
        "${data.Airport_code}", "${data.Name}",
        "${data.City}", "${data.State}", "${data.Number_of_employee}")`;
        console.log(sql);
        await promisePool.query(sql);
  },
  insertAIRPLANE: async (data) => {
    const sql = `insert into AIRPLANE values(
          "${data.Airplane_id}", "${data.Total_number_of_seats}",
          "${data.Airplane_model}")`;
    await promisePool.query(sql);
  },
  insertFLIGHT: async (data) => {
    const sql = `insert into FLIGHT values(
          "${data.Flight_number}", "${data.Airline}",
          "${data.Weekdays}", "${data.Pilot}")`;
    await promisePool.query(sql);
  },
  insertSeat: async (data) => {
    const sql1 = `start transaction`;
    await promisePool.query(sql1);
    const sql2 = `update Leg_instance set Number_of_available_seats = Number_of_available_seats-1 where Flight_no = "${data.Flight_no}" and Leg_no = "${data.Leg_no}" and
    Date = "${data.Date}"`
    await promisePool.query(sql2);
    const sql3 = `insert into seat values ("${data.Flight_no}","${data.Leg_no}",
    "${data.Date}","${data.seat_number}","${data.Customer_name}","${data.Customer_phone}")`
    await promisePool.query(sql3);
    const sql4 = `commit`;
    await promisePool.query(sql4);
  }
};
//insert

export const deleteSql = {
  deleteAIRPORT: async (data) => {
    const sql = `delete from AIRPORT where Airport_code = "${data.Airport_code}"`;
    await promisePool.query(sql);
  },
  deleteAIRPLANE: async (data) => {
    const sql = `delete from AIRPLANE where Airplane_id = "${data.Airplane_id}"`;
    await promisePool.query(sql);
  },
  deleteFLIGHT: async (data) => {
    const sql = `delete from FLIGHT where Flight_number = "${data.Flight_number}"`;
    await promisePool.query(sql);
  },
};
//delete

export const updateSql = {
  updateAIRPORT: async (data) => {
    const sql = `update AIRPORT set Number_of_employee = "${data.Number_of_employee}" where Airport_code = "${data.Airport_code}"`;
    await promisePool.query(sql);
  },
  updateAIRPLANE: async (data) => {
    const sql = `update AIRPLANE set Total_number_of_seats = "${data.Total_number_of_seats}" where Airplane_id = "${data.Airplane_id}"`;
    await promisePool.query(sql);
  },
  updateFLIGHT: async (data) => {
    const sql = `update FLIGHT set Pilot = "${data.Pilot}" where Flight_number = "${data.Flight_number}"`;
    await promisePool.query(sql);
  },
};
//update