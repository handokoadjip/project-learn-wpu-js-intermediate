// General Function
// - Function Declaration
//  function tampilPesan(nama) {
//     alert(`Halo ${nama}`);
// }
// tampilPesan(`Handoko`);

// - Function Expresion
// const tampilPesan = function () {
//     alert(`Halo ${nama}`);
// }
// tampilPesan(`Handoko`);

// Arrow Function || tidak punya this
// - tanpa parameter
// const tampilPesan = () => alert(`Hallo`);

// - implisit return
// - 1 argument, 1 garis hanya return
// const tampilPesan = nama => alert(`Halo ${nama}`);
// tampilPesan(`Handoko`);

// - 2 argument, banyak garis
// const tampilPesan = (waktu, nama) => {
//     return console.log(`Selamat ${waktu}, ${nama}`);
// }

// CONTOH ARROF FUNCTION MENGGUNAKAN ARROW FUNCTION
// Array
// const mahasiswa = ['Handoko', 'Rizkia', 'Cika', 'Coki'];
// const jumlahHuruf = mahasiswa.map(mhs => mhs.length);

// console.log(jumlahHuruf);

// Object
// const mahasiswa = ['Handoko', 'Rizkia', 'Cika', 'Coki'];
// const jumlahHuruf = mahasiswa.map(mhs => ({
//     nama: mhs,
//     mhs,
//     jumlahHuruf: mhs.length
// }));

// console.table(jumlahHuruf);

// CONTOH CONSTRUCT FUNCTION DENGAN ARROW FUNCTION
// const Mahasiswa = function () {
//     this.nama = 'Handoko';
//     this.umur = 21;
//     this.sayHello = () => {
//         // this pada arrow mengacu pada lexical scope
//         console.log(`Hallo ${this.nama}, ${this.umur} umur`);
//     }
// }

// OBJECT LITERAL
// Maka nama di log akan undefined karena arrow function tidak punya this jadi dia mencari ke window
// const mhs1 = {
//     nama: 'Handoko',
//     sayHello: () => {
//         console.log(`Hallo ${this.nama}`);
//     }
// }

// CONTOH REAL 
// cara lama
// const box = document.querySelector('.box');
// box.addEventListener('click', function () {
//     const that = this;
//     this.classList.toggle('size');
//     setTimeout(function () {
//         that.classList.toggle('caption')
//     }, 600);
// });

// cara baru
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains('size')) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua)
    }, 600);
});