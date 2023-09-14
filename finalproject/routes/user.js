import express from "express";
import async from "hbs/lib/async";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get("/", async function (req, res) {
  const SEAT = await selectSql.getSEAT();
  res.render("user", {
    title1: "예약 확인",
    SEAT,
  });
});





module.exports = router;