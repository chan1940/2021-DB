import express from "express";
import { insertSql } from "../database/sql";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("insert");
});

router.post("/", (req, res) => {
  console.log(1);
  var vars = req.body;
  const data1 = {
    Airport_code: vars.Airport_code,
    Name: vars.Name,
    City: vars.City,
    State: vars.State,
    Number_of_employee: vars.Number_of_employee,
  };
  const data2 = { 
    Airplane_id: vars.Airplane_id,
    Total_number_of_seats: vars.Total_number_of_seats,
    Airplane_model: vars.Airplane_model,
  };
  const data3 ={
    Flight_number: vars.Flight_number,
    Airline: vars.Airline,
    Weekdays: vars.Weekdays,
    Pilot: vars.Pilot,
  };
  if(data2.Airplane_id===undefined&&data3.Flight_number===undefined)
      insertSql.insertAIRPORT(data1);
  else if(data1.Airport_code===undefined&&data3.Flight_number===undefined)
      insertSql.insertAIRPLANE(data2);
  else if(data2.Airplane_id===undefined&&data1.Airport_code===undefined)
      insertSql.insertFLIGHT(data3);
  res.redirect("/insert");
});

module.exports = router;