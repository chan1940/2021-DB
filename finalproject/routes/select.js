import express from "express";
import async from "hbs/lib/async";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get("/", async function (req, res) {
  const AIRPORT = await selectSql.getAIRPORT();
  const AIRPLANE = await selectSql.getAIRPLANE();
  const FLIGHT = await selectSql.getFLIGHT();
  const Users = await selectSql.getUser();
  res.render("select", {
    title1: "AIRPORT TABLE",
    title2: "AIRPLANE TABLE",
    title3: "FLIGHT TABLE",
    AIRPORT,
    AIRPLANE,
    FLIGHT,
  });
});





module.exports = router;