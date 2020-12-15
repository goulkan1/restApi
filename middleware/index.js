const { Router } = require("express");
const express = require("express");
var auth = require("./auth");
const router = express.Router();

router.post("/api/v1/register", auth.regis);

module.exports = router;
