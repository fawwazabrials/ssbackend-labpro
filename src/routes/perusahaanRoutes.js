const express = require("express");
const {
	getPerusahaan,
	getPerusahaanById,
	createPerusahaan,
    updatePerusahaan,
    deletePerusahaan,
} = require("../controllers/perusahaanController");
const router = express.Router();

const dummy = (req, res) => res.send({ message: "tes" });

// GET POST /perusahaan
router.route("/").get(getPerusahaan).post(createPerusahaan);

// GET PUT DELETE /perusahaan/:id
router.route("/:id").get(getPerusahaanById).put(updatePerusahaan).delete(deletePerusahaan);

module.exports = router;
