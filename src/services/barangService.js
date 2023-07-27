const {
	find,
	findById,
	findByKode,
	create,
	update,
	remove,
} = require("../repository/barangRepository");
const { getPerusahaanById } = require("../services/perusahaanService");
const createError = require("../utils/createError");

const verifyKode = (kode) => {
	return kode === kode.toUpperCase() && kode.length === 3;
};

const getBarang = async (q, perusahaan) => {
	const result = await find(q, perusahaan);
	return result;
};

const getBarangById = async (id) => {
	const result = await findById(id);
	if (!result) {
		throw createError(400, "Barang with id does not exist");
	}
	return result;
};

const getBarangKode = async (kode) => {
	const result = await findByKode(kode);
	return result;
};

const createBarang = async (nama, harga, stok, perusahaan_id, kode) => {
	await getPerusahaanById(perusahaan_id);
	if (await getBarangKode(kode)) {
		throw createError(400, "Kode barang must be unique");
	}
	const result = await create(nama, harga, stok, perusahaan_id, kode);
	return result;
};

const updateBarang = async (id, nama, harga, stok, perusahaan_id, kode) => {
	await getBarangById(id);
	await getPerusahaanById(perusahaan_id);
	// if ((await getBarangKode(kode)).id != id) {
	// 	throw createError(400, "Kode barang must be unique");
	// }
	const result = await update(id, nama, harga, stok, perusahaan_id, kode);
	return result;
};

const deleteBarang = async (id) => {
	await getBarangById(id);
	const result = await remove(id);
	return result;
};

module.exports = {
	getBarang,
	getBarangById,
	createBarang,
	updateBarang,
	deleteBarang,
};
