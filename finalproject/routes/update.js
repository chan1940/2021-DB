import express from "express";
import { selectSql, updateSql } from "../database/sql";
//update.js에서는 데이터를 받고 수정 모두 해줘야 하므로
//selectSql, updateSql 모듈을 둘 다 불러와야 한다.
const router = express.Router();

router.get("/", async (req, res) => {
    const AIRPORT = await selectSql.getAIRPORT();
    const AIRPLANE = await selectSql.getAIRPLANE();
    const FLIGHT = await selectSql.getFLIGHT();
  
    res.render("update",{
      title1: "AIRPORT TABLE UPDATE",
      title2: "AIRPLANE TABLE UPDATE",
      title3: "FLIGHT TABLE UPDATE",
      AIRPORT,
      AIRPLANE,
      FLIGHT,
    })
  });

router.post("/", async (req, res) => {
  const vars = req.body;
  if(vars.Airport_code !== undefined){  
    const data = {
        Airport_code: vars.Airport_code,
        Number_of_employee: vars.Number_of_employee
    }
    await updateSql.updateAIRPORT(data);
    res.redirect("/update");
  }
  else if(vars.Airplane_id !== undefined){
      const data ={
          Airplane_id: vars.Airplane_id,
          Total_number_of_seats: vars.Total_number_of_seats
      }
    await updateSql.updateAIRPLANE(data);
    res.redirect("/update");
  }
  else if(vars.Flight_number !== undefined){
    const data ={
        Flight_number: req.body.Flight_number,
        Pilot: vars.Pilot
    }
    await updateSql.updateFLIGHT(data);
    res.redirect("/update");
  }

});

module.exports = router;
