const prisma = require("../../prisma/db");

const selectData = {
	id: true,
	nama: true,
	harga: true,
	stok: true,
	kode: true,
	perusahaan_id: true,
};

module.exports = Object.freeze({
	find: async (q, perusahaan) =>
		prisma.barang.findMany({
			select: selectData,
			orderBy: [
				{
					id: "desc",
				},
			],
			where: {
				OR: [
					{
						nama: {
							contains: q,
							mode: "insensitive",
						},
					},
					{
						kode: {
							contains: q,
							mode: "insensitive",
						},
					},
				],
				perusahaan_id: perusahaan,
			},
		}),
	findById: async (id) =>
		prisma.barang.findUnique({
			select: selectData,
			where: {
				id,
			},
		}),
	findByKode: async (kode) =>
		prisma.barang.findUnique({
			select: selectData,
			where: {
				kode,
			},
		}),
	create: async (nama, harga, stok, perusahaan_id, kode) =>
		prisma.barang.create({
			select: selectData,
			data: {
				nama,
				harga,
				stok,
				perusahaan_id,
				kode,
			},
		}),
	update: async (id, nama, harga, stok, perusahaan_id, kode) =>
		prisma.barang.update({
			select: selectData,
			where: { id },
			data: {
				nama,
				harga,
				stok,
				perusahaan_id,
				kode,
			},
		}),
	remove: async (id) =>
		prisma.barang.delete({
			select: selectData,
			where: { id },
		}),
});
