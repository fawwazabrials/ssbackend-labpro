const express = require("express");
const perusahaanController = require("../controllers/perusahaanController");
const router = express.Router();

// GET POST /perusahaan
router
	.route("/")
	.get(perusahaanController.getPerusahaan)
	.post(perusahaanController.createPerusahaan);

// GET PUT DELETE /perusahaan/:id
router
	.route("/:id")
	.get(perusahaanController.getPerusahaanById)
	.put(perusahaanController.updatePerusahaan)
	.delete(perusahaanController.deletePerusahaan);

module.exports = router;
