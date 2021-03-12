// Membat object

// Object Literal
// PROBLEM : Tidak efektiv untuk obeject banyak
// let mhs1 = {
//     nama: 'Handoko Adji Pangestu',
//     energi: 10,
//     makan: function (porsi) {
//         this.energy += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }
// }

// let mhs2 = {
//     nama: 'Rizkia Nur Safitri',
//     energi: 10,
//     makan: function (porsi) {
//         this.energy += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }
// }

// Function Declaration 
// PROBLEM: Duplikasi Memory
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain!`);
//     }

//     return mahasiswa;
// }

// let mhs1 = Mahasiswa('Handoko Adji Pangestu', 10);
// let mhs2 = Mahasiswa('Rizkia Nur Safitri', 20);

// Function Construct
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain!`);
//     }
// }

// let mhs1 = new Mahasiswa('Handoko Adji Pangestu', 10);
// let mhs2 = new Mahasiswa('Rizkia Nur Safitri', 20);

// Object.create
// PROBLEM: Membuat dua buah object
// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain!`);
//     }
// }

// function Mahasiswa(nama, energi) {
// Object.created() => membat object serta parent nya || seperti inheritance
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let mhs1 = Mahasiswa('Handoko Adji Pangestu', 10);
// let mhs2 = Mahasiswa('Rizkia Nur Safitri', 20);

// Prototype
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return console.log(`Hallo ${this.nama}, selamat bermain!`);
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return console.log(`Hallo ${this.nama}, selamat bermain!`);
// }

// let mhs1 = new Mahasiswa('Handoko Adji Pangestu', 10);

// Class
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi) {
//         this.energi += porsi;
//         return console.log(`Hello ${this.nama}, selamat makan!`);
//     }

//     main(jam) {
//         this.energi -= jam;
//         return console.log(`Hello ${this.nama}, selamat main!`);
//     }
// }

// let mhs1 = new Mahasiswa('Handoko Adji Pangestu', 10);