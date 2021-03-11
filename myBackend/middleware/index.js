const { Router } = require("express");
const express = require("express");
var auth = require("./auth");
const verivikasi = require("./verivikasi");
const router = express.Router();

router.post("/api/v1/register", auth.regis);
router.post("/api/v1/login", auth.login);

//role 2
router.get("/api/v1/rahasia", verivikasi(), auth.halamanRahasisa);

// router.get("/api/v1/rahasia", (req, res) => {
//   verivikasi(2), auth.halamanRahasisa;
// });

module.exports = router;
