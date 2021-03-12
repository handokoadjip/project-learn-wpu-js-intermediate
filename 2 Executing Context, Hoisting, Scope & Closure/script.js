// Executing context // cek -> javascript virtualization

// - creating phase pada global Execution Context
// nama var = undefined
// nama function = fn()
//  + function membuat local Execution Context
//  + terdapat creating dan executing
//  + window
//  + arguments
//  + hoisting
// HOISTING
// window = global object
// this = window

// - executing phase
//  + executing stack

// Scope
// var nama = "Handoko Adji Pangestu";
// var username = "Handokoadjip";

// function cetakURL() {
//   console.log(arguments);
//   var instagramURL = "http://instagram.com/";
//   return instagramURL + username;
// }

// Jika tidak ada parameter maka akan masuk ke arguments
// console.log(cetakURL("Rizkia Nur Safitri"));

// Example Executing Context, Hoisting, Scope

// function satu() {
//   var nama = "Handoko Adji Pangestu";
//   console.log(nama);
// }

// function dua() {
//   console.log(nama);
// }

// console.log(nama);
// var nama = "Rizkia Nur Safitri";
// satu();
// dua("CikaCoki");
// console.log(nama);

// CLOSURE

// Lexical Scpoe
// function init() {
//   let nama = 'Handoko Adji Pangestu'; // local variable
//   let umur = 21;

//   function tampilNama() { // inner function (closure*)
//     console.log(nama); // akses ke parent variable jadi ini dinamakan closure
//   }

//   // untuk melihat object nya
//   console.dir(tampilNama);
// }
// init();

// Factory
// function ucapkanSalam(waktu) {
//   return function (nama) { // inner function (closure*)
//     console.log(`Hallo ${nama}, selamat ${waktu}!`); // akses ke parent variable jadi ini dinamakan closure
//   }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatMalam = ucapkanSalam('malam');

// console.log(selamatPagi('Handoko Adji Pangestu')) 


// Untuk private method
// bungkus function kedala IIFE atau SIAF
// let add = (function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   }
// })();

// console.log(add());