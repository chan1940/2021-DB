import express from "express";
import async from "hbs/lib/async";
import { insertSql, selectSql } from "../database/sql";

const router = express.Router();

router.get("/", async function (req, res) {
  const SCHEDULE = await selectSql.getSCHEDULE();
  res.render("reserve", {
    title: "비행기 예약 사이트",
    SCHEDULE,
  });
});

router.post("/", async function (req,res){
    const data ={
        Flight_no : req.body.Flight_no,
        Leg_no : req.body.Leg_no,
        Date : req.body.Date,
        seat_number : req.body.seat_number,
        Customer_name : req.body.customerName,
        Customer_phone : req.body.customerPhone
    };
    console.log(data);
    await insertSql.insertSeat(data);
    res.redirect('/reserve');
});





module.exports = router;