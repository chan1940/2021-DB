import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

router.get("/", async (req, res) => {
  //'/update/employee'
  const department = await selectSql.getDepartment();
  res.render("delete", {
    title: "삭제 기능",
    department,
  });
});

router.post("/", async (req, res) => {
  //update한 후에
  console.log("delete router:", req.body.delBtn);

  const data = {
    Dnumber: req.body.delBtn,
  };
  await deleteSql.deleteDepartment(data);

  res.redirect("/delete"); //'/delete'로 이동
});

module.exports = router;