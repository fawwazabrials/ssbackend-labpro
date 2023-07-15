const express = require("express");
const perusahaanController = require("../controllers/perusahaanController");
const authorization = require("../middleware/authorization");
const router = express.Router();

// GET POST /perusahaan
router
	.route("/")
	.get(perusahaanController.getPerusahaan)
	.post(authorization, perusahaanController.createPerusahaan);

// GET PUT DELETE /perusahaan/:id
router
	.route("/:id")
	.get(perusahaanController.getPerusahaanById)
	.put(authorization, perusahaanController.updatePerusahaan)
	.delete(authorization, perusahaanController.deletePerusahaan);

module.exports = router;
