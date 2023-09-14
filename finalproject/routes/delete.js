import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

router.get("/", async (req, res) => {
  const AIRPORT = await selectSql.getAIRPORT();
  const AIRPLANE = await selectSql.getAIRPLANE();
  const FLIGHT = await selectSql.getFLIGHT();

  res.render("delete",{
    title1: "AIRPORT TABLE DELETE",
    title2: "AIRPLANE TABLE DELETE",
    title3: "FLIGHT TABLE DELETE",
    AIRPORT,
    AIRPLANE,
    FLIGHT,
  })
});
//delete.hbs와 연결

router.post("/", async (req, res) => {
    if(req.body.delBtn1 !== undefined){
      const data = {
        Airport_code: req.body.delBtn1,
      }
      deleteSql.deleteAIRPORT(data);
      res.redirect("/delete");
    }

    else if(req.body.delBtn2 !== undefined){
      const data = {
        Airplane_id: req.body.delBtn2,
      }
      deleteSql.deleteAIRPLANE(data);
      res.redirect("/delete");
    }

    else if(req.body.delBtn3 !== undefined){
      const data ={
        Flight_number: req.body.delBtn3,
      }
      deleteSql.deleteFLIGHT(data);
      res.redirect("/delete");
    }
});

module.exports = router;