const express = require("express");
const {
	getPerusahaan,
	getPerusahaanById,
	createPerusahaan,
    updatePerusahaan,
    deletePerusahaan,
} = require("../controllers/perusahaanController");
const router = express.Router();

// GET POST /perusahaan
router.route("/").get(getPerusahaan).post(createPerusahaan);

// GET PUT DELETE /perusahaan/:id
router.route("/:id").get(getPerusahaanById).put(updatePerusahaan).delete(deletePerusahaan);

module.exports = router;
