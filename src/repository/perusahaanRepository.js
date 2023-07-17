import prisma from '../../lib/db';

const selectData = {
	id: true,
	nama: true,
	alamat: true,
	no_telp: true,
	kode: true,
};

module.exports = Object.freeze({
	find: async (q) =>
		prisma.perusahaan.findMany({
			select: selectData,
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
			},
		}),
	findById: async (id) =>
		prisma.perusahaan.findUnique({
			select: selectData,
			where: {
				id,
			},
		}),
	findByKode: async (kode) =>
		prisma.perusahaan.findUnique({
			select: selectData,
			where: {
				kode,
			},
		}),
	create: async (nama, alamat, no_telp, kode) =>
		prisma.perusahaan.create({
			select: selectData,
			data: {
				nama,
				alamat,
				no_telp,
				kode,
			},
		}),
	update: async (id, nama, alamat, no_telp, kode) =>
		prisma.perusahaan.update({
			select: selectData,
			where: { id },
			data: {
				nama,
				alamat,
				no_telp,
				kode,
			},
		}),
	remove: async (id) =>
		prisma.perusahaan.delete({
			select: selectData,
			where: { id },
		}),
});
