// Destructuring Assignemnt
// Destructuring Array
// const coba = ['satu', 'dua', 'tiga'];
// const [a, b, c] = coba; // || const [a, , b] = coba;

// console.log(a);
// console.log(b);
// console.log(c);

// - swap items array
// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// - return value function
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();

// console.log(a);

// - rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5, 6];
// console.log(values);


// Destructuring Object
// const mhs = {
//     nama: 'Han',
//     umur: 21,
//     email: 'Handokoadjipangestu@gmail.com'
// }

// const {
//     nama,
//     umur,
//     email
// } = mhs;

// console.log(nama);
// console.log(umur);
// console.log(email);

// - assignement tanpa deklarasi
// ({
//     nama,
//     umur,
//     email
// } = {
//     nama: 'Han',
//     umur: 21,
//     email: 'Handokoadjipangestu@gmail.com'
// });

// console.log(nama);

// - assignement ke variable baru
// const mhs = {
//     nama: 'Han',
//     umur: 21,
//     email: 'Handokoadjipangestu@gmail.com'
// }

// const {
//     nama: nm,
//     umur: um,
//     email: em
// } = mhs;

// console.log(nm);
// console.log(um);
// console.log(em);

// - memberika default baru
// const mhs = {
//     nama: 'Han',
//     umur: 21
// }

// const {
//     nama,
//     umur,
//     email = 'default@gmail.com'
// } = mhs;

// console.log(email);

// - rest parameter
// const mhs = {
//     nama: 'Han',
//     umur: 21,
//     email: 'handoko@gmail,com'
// }

// const {
//     nama,
//     ...values
// } = mhs;

// console.log(values);

// mengambil field pada object, setelah dikirim sebagai parameter function
// const mhs = {
//     id: 111,
//     nama: 'Han',
//     umur: 21,
//     email: 'handoko@gmail,com'
// }

// function getMhsId({
//     id
// }) {
//     return id;
// }

// console.log(getMhsId(mhs));

// LATIHAN 1
// function jumlahKali(a, b) {
//     return [a + b, a * b];
// }

// const [jumlah, kali] = jumlahKali(2, 3);
// console.log(jumlah);
// console.log(kali);

// LATIHAN 2
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     };
// }

// const {
//     kurang,
//     tambah,
//     bagi,
//     kalli
// } = kalkulasi(2, 3);
// console.log(kurang);

// LATIHAN 3
// const mhs1 = {
//     nama: 'Han',
//     umur: 21,
//     email: 'Han@han.com',
//     nilai: {
//         uas: 200,
//         uts: 75
//     }
// }

// function cetakNama({
//     nama,
//     umur,
//     nilai: {
//         uas,
//         uts
//     }
// }) {
//     return `Halo ${nama}, umur ${umur} tahun, nilai uas adalah ${uas}`;
// }

// console.log(cetakNama(mhs1));