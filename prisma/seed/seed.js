const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const barang = require("./barang.json");
const perusahaan = require("./perusahaan.json");

// perusahaan = JSON.parse(perusahaan);

async function main() {
	for (let i = 0; i < perusahaan.length; i++) {
		const { id, nama, alamat, no_telp, kode } = perusahaan[i];
		console.log(
			`SEEDING PERUSAHAAN ${i}: `,
			id,
			nama,
			alamat,
			no_telp,
			kode
		);
		await prisma.perusahaan.upsert({
			where: { id },
			update: {},
			create: {
				id,
				nama,
				alamat,
				no_telp,
				kode,
			},
		});
	}

	for (let i = 0; i < barang.length; i++) {
		const { id, nama, harga, stok, kode, perusahaan_id } = barang[i];
		console.log(
			`SEEDING BARANG ${i}: `,
			id,
			nama,
			harga,
			stok,
			kode,
			perusahaan_id
		);
		await prisma.barang.upsert({
			where: { id },
			update: {},
			create: {
				id,
				nama,
				harga,
				stok,
				kode,
				perusahaan_id,
			},
		});
	}

	console.log("Seeding complete!");
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
