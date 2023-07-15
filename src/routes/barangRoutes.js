const express = require("express");
const barangController = require("../controllers/barangController");
const authorization = require("../middleware/authorization");
const router = express.Router();

// GET POST /barang
router
	.route("/")
	.get(barangController.getBarang)
	.post(authorization, barangController.createBarang);

// GET PUT DELETE /barang/:id
router
	.route("/:id")
	.get(barangController.getBarangById)
	.put(authorization, barangController.updateBarang)
	.delete(authorization, barangController.deleteBarang);

module.exports = router;
