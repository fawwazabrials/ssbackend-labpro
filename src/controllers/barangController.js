const asyncHandler = require("express-async-handler");
const createError = require("../utils/createError");
const barangService = require("../services/barangService");

// @desc Fetch barang
// @route GET /barang
// @query { q: string, perusahaan: string } // q=search berdasarkan nama dan kode, perusahaan=search berdasarkan nama perusahaan
// @access public
const getBarang = asyncHandler(async (req, res) => {
	const { q = "", perusahaan } = req.query; // blank string supaya contains masih work
	const result = await barangService.getBarang(q, perusahaan);
	res.status(200).send({
		status: "success",
		message: "Fetched barang",
		data: result,
	});
});

// @desc Fetch barang sesuai dengan id
// @route GET /barang/:id
// @access public
const getBarangById = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const result = await barangService.getBarangById(id);
	res.status(200).send({
		status: "success",
		message: "Fetched barang with id",
		data: result,
	});
});

// @desc Create a new barang
// @route POST /barang
// @request
//    { nama: string
//      harga: int
//      stok: int
//      perusahaan_id: string
//      kode: string }
// @access private
const createBarang = asyncHandler(async (req, res) => {
	const { nama, harga, stok, perusahaan_id, kode } = req.body;
	if (!nama || !harga || !stok || !perusahaan_id || !kode) {
		throw createError(
			400,
			"Request must include nama, harga, stok, perusahaan_id and kode"
		);
	}
	const result = await barangService.createBarang(
		nama,
		harga,
		stok,
		perusahaan_id,
		kode
	);
	res.status(200).send({
		status: "success",
		message: "Created new barang",
		data: result,
	});
});

// @desc Update a barang
// @route PUT /barang/:id
// @request
//    { nama: string
//      harga: int
//      stok: int
//      perusahaan_id: string
//      kode: string }
// @access private
const updateBarang = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const { nama, harga, stok, perusahaan_id, kode } = req.body;
	// console.log(nama, harga, stok, perusahaan_id, kode);
	if (!nama || !harga || stok<0 || !perusahaan_id || !kode) {
		throw createError(
			400,
			"Request must include correct nama, harga, stok, perusahaan_id and kode"
		);
	}
	const result = await barangService.updateBarang(
		id,
		nama,
		harga,
		stok,
		perusahaan_id,
		kode
	);
	res.status(200).send({
		status: "success",
		message: "Updated barang",
		data: result,
	});
});

// @desc Delete a barang
// @route DELETE /perusahan/:id
// @access private
const deleteBarang = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const result = await barangService.deleteBarang(id);
	res.status(200).send({
		status: "success",
		message: "Deleted barang",
		data: result,
	});
});

module.exports = {
	getBarang,
	getBarangById,
	createBarang,
	updateBarang,
	deleteBarang,
};
