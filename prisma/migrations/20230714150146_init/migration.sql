-- CreateTable
CREATE TABLE "Perusahaan" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "no_telp" TEXT NOT NULL,
    "kode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Perusahaan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Barang" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "harga" INTEGER NOT NULL,
    "stok" INTEGER NOT NULL,
    "kode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "perusahaan_id" TEXT NOT NULL,

    CONSTRAINT "Barang_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Perusahaan_kode_key" ON "Perusahaan"("kode");

-- CreateIndex
CREATE UNIQUE INDEX "Barang_kode_key" ON "Barang"("kode");

-- AddForeignKey
ALTER TABLE "Barang" ADD CONSTRAINT "Barang_perusahaan_id_fkey" FOREIGN KEY ("perusahaan_id") REFERENCES "Perusahaan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
