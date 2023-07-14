const express = require("express");
const router = express.Router();
const barangController = require("../controllers/barangController");

// GET POST /barang
router
	.route("/")
	.get(barangController.getBarang)
	.post(barangController.createBarang);

// GET PUT DELETE /barang/:id
router
	.route("/:id")
	.get(barangController.getBarangById)
	.put(barangController.updateBarang)
	.delete(barangController.deleteBarang);

module.exports = router;
