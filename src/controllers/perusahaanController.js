const asyncHandler = require("express-async-handler");
const createError = require("../utils/createError");
const perusahaanService = require("../services/perusahaanService");

// @desc Fetch perusahaan; Bisa berdasarkan query q=nama (search berdasarkan nama dan kode)
// @route GET /perusahan
// @query { q: string } // search berdasarkan nama dan kode
// @access public
const getPerusahaan = asyncHandler(async (req, res) => {
	const q = req.query.q || ""; // blank string supaya contains masih work
	const result = await perusahaanService.getPerusahaan(q);
	res.status(200).send({
		status: "success",
		message: "Fetched perusahaan",
		data: result,
	});
});

// @desc Fetch perusahaan sesuai dengan id
// @route GET /perusahan/:id
// @access public
const getPerusahaanById = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const result = await perusahaanService.getPerusahaanById(id);
	res.status(200).send({
		status: "success",
		message: "Fetched perusahaan with id",
		data: result,
	});
});

// @desc Create a new perusahaan
// @route POST /perusahan
// @request
//    { nama: string
//      alamat: string
//      no_telp: string
//      kode: string }
// @access private
const createPerusahaan = asyncHandler(async (req, res) => {
	const { nama, alamat, no_telp, kode } = req.body;
	if (!nama || !alamat || !no_telp || !kode) {
		throw createError(
			400,
			"Request must include nama, alamat, no_telp and kode"
		);
	}
	const result = await perusahaanService.createPerusahaan(
		nama,
		alamat,
		no_telp,
		kode
	);
	res.status(200).send({
		status: "success",
		message: "Created new perusahaan",
		data: result,
	});
});

// @desc Update a perusahaan
// @route PUT /perusahan/:id
// @request
//    { nama: string
//      alamat: string
//      no_telp: string
//      kode: string }
// @access private
const updatePerusahaan = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const { nama, alamat, no_telp, kode } = req.body;
	if (!nama || !alamat || !no_telp || !kode) {
		throw createError(
			400,
			"Request must include nama, alamat, no_telp and kode"
		);
	}
	const result = await perusahaanService.updatePerusahaan(
		id,
		nama,
		alamat,
		no_telp,
		kode
	);
	res.status(200).send({
		status: "success",
		message: "Updated perusahaan",
		data: result,
	});
});

// @desc Delete a perusahaan
// @route DELETE /perusahan/:id
// @access private
const deletePerusahaan = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const result = await perusahaanService.deletePerusahaan(id);
	res.status(200).send({
		status: "success",
		message: "Deleted perusahaan",
		data: result,
	});
});

module.exports = {
	getPerusahaan,
	getPerusahaanById,
	createPerusahaan,
	updatePerusahaan,
    deletePerusahaan
};
