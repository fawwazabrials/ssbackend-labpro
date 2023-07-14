const {
	find,
	findById,
	findByKode,
	create,
	update,
	remove,
} = require("../repository/perusahaanRepository");
const createError = require("../utils/createError");

const verifyKode = (kode) => {
	return kode === kode.toUpperCase() && kode.length === 3;
};

const getPerusahaan = async (q) => {
	const result = await find(q);
	return result;
};

const getPerusahaanById = async (id) => {
	const result = await findById(id);
	if (!result) {
		throw createError(400, "Perusahaan with id does not exist");
	}
	return result;
};

const getPerusahaanByKode = async (kode) => {
	const result = await findByKode(kode);
	return result;
};

const createPerusahaan = async (nama, alamat, no_telp, kode) => {
	if (!verifyKode(kode) || getPerusahaanByKode(kode)) {
		throw createError(
			400,
			"Kode perusahaan must be a unique all uppercase three letters long string"
		);
	}
	const result = await create(nama, alamat, no_telp, kode);
	return result;
};

const updatePerusahaan = async (id, nama, alamat, no_telp, kode) => {
	await getPerusahaanById(id);
	if (!verifyKode(kode)) {
		throw createError(
			400,
			"Kode perusahaan must be a unique all uppercase three letters long string"
		);
	}
	const result = await update(id, nama, alamat, no_telp, kode);
	return result;
};

const deletePerusahaan = async (id) => {
	await getPerusahaanById(id);
	const result = await remove(id);
	return result;
};

module.exports = {
	getPerusahaan,
	getPerusahaanById,
	createPerusahaan,
	updatePerusahaan,
	deletePerusahaan,
};
