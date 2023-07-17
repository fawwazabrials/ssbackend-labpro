# Single Service Backend

## Description

Single service API yang digunakan untuk aplikasi *pembelian barang sesajen* ([Github Repo](https://github.com/fawwazabrials)). Spesifikasi API menggunakan spesifikasi sesuai dengan spesifikasi yang diberikan pada seleksi asisten Labpro.

## Daftar Isi
* [Technology Stack](#technology-stack)
* [Design Patterns](#design-patterns)
* [Requirements](#requirements)
* [Setup](#setup)
* [Endpoints](#endpoints)
* [Bonuses](#bonuses)
* [Created By](#created-by)

## Technology Stack
* Bahasa Javascript dengan NodeJS 18.16.1
* ExpressJS 4.18.2 sebagai framework pembuatan API
* PostgreSQL 15.3 sebagai database
* Prisma 5.0.0 sebagai ORM (Object Relational Mapper)
* Docker sebagai container aplikasi

## Design Patterns
* Decorator
Untuk menghindari penulisan kode untuk authorization yang sama pada semua kode endpoint private, maka dibuat decorator middleware untuk menangani hal tersebut. Digunakan juga decorator middleware 3rd party yaitu express-async-handler untuk menangani penangkapan error secara asinkronus.
* Chain of Responsibility
Arsitektur projek menggunakan arsitektur MVC (Model View Controller) sehingga setiap bagian kode terisolasi untuk mengerjakan tugasnya saja. Dengan begitu, ketika ada request yang datang, perjalanan request tersebut akan melewati layer-layer arsitektur. Pada setiap layer, request akan diteruskan dari ExpressJS sendiri sampai ke database. Perjalanan request: Express -> Middleware -> Controller -> Service -> Repository -> Database. Hal yang sama akan terjadi ketika meneruskan response dari database ke user.
* Singleton
Untuk menghindari inisialisasi prisma yang banyak ketika memanggik ke repository layer, dibuatlah prisma client sebagai sebuah singleton.

## Requirements
Pastikan [Docker](https://docs.docker.com/desktop/install/windows-install/) sudah terinstall di mesin!

## Setup
1. Clone repository ini
2. Duplikat `.env.example` kemudian rename menjadi `.env`. Panduan pengisian berada di dalam file tersebut.
3. Jalankan aplikasi docker
4. Ketik `docker compose up` pada terminal / cmd

## Endpoints

### Admin Endpoint
| No | HTTP Method  | URL              | Description                              |
| -- | ------------ | ---------------- | ---------------------------------------- |
| 1  | POST         | login            | Login admin                              |
| 2  | POST         | self             | Get admin's information                  |

### Barang Endpoint
| No | HTTP Method  | URL            | Description                     |
| -- | ------------ | -------------- | ------------------------------- |
| 1  | GET          | barang         | Get list of barang              |
| 2  | POST         | barang         | Create new barang               |
| 3  | GET          | barang/:id     | Get barang by id                |
| 4  | UPDATE       | barang/:id     | Update barang information       |
| 5  | DELETE       | barang/:id     | Delete barang                   |


### Perusahaan Endpoint
| No | HTTP Method  | URL                | Description                         |
| -- | ------------ | ------------------ | ----------------------------------- |
| 1  | GET          | perusahaan         | Get list of perusahaan              |
| 2  | POST         | perusahaan         | Create new perusahaan               |
| 3  | GET          | perusahaan/:id     | Get perusahaan by id                |
| 4  | UPDATE       | perusahaan/:id     | Update perusahaan information       |
| 5  | DELETE       | perusahaan/:id     | Delete perusahaan                   |

## Bonuses
Saat ini belum ada :<
TODO: Documentation, automated testing, deployment

## Created by
Fawwaz Abrial Saffa
18221067