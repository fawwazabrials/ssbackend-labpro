const express = require("express");
const authController = require("../controllers/authController");
const authorization = require("../middleware/authorization");
const router = express.Router();

router.post("/login", authController.login);

router.get("/self", authorization, authController.self);

module.exports = router;
