// Higher order function
// dapat membaut function menjadi parameter atau nilai kembalian
// higher order function       // callback
// function kerjakanTugas(tugas, selesai) {
//     console.log(`Mulai mengerjakan ${tugas}`);
//     selesai();
// }

// function selesai() {
//     alert('Selesai mengerjakan tugas');
// }

// kerjakanTugas('Android', selesai());

// Filter, Map, Reduce
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// Cara lama menggunakan For
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// Cara baru menggunakan Filter
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// Map
// Kalikan Angka dengan 2
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// Reduce
// jumlahkan seluruh elemnt angka
// default 0 namun tidak di pakai tidak apa2
// const newAngka = angka.reduce(
//   (accumulator, current) => accumulator + current,
//   0
// );
// console.log(newAngka);

// METHOD CHAINNIG
// cari angka > 5 lalu * 3 lalu jumlahkan
// const newAngka = angka
//   .filter((a) => a > 5)
//   .map((a) => a * 3)
//   .reduce((accumulator, current) => accumulator + current, 0);

// console.log(newAngka);

// LATIHAN

// Ambil semua element video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

//  pilih hanya JAVA SCRIPT LANJUTAN
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  //  Ambil durasi masing2 video
  .map((item) => item.dataset.duration)

  //  uah durasi menjadi float lalu uha jadi detik
  .map((waktu) => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  //  jumlahkan semua detik
  .reduce((total, detik) => total + detik);

//  ubah format nya jadi jam
const jam = Math.floor(jsLanjut / 3600);

// Ambil sisa dari jam
jsLanjut = jsLanjut - jam * 3600;

// Ubah menjadi menit
const menit = Math.floor(jsLanjut / 60);

// Ubah menjadi detik
const detik = jsLanjut - menit * 60;

// Masukan ke DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam}:${menit}:${detik}`;

const jVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;

const pVideo = document.querySelector(".jumlah-video");
pVideo.textContent = `${jVideo} buah`;

console.log(jsLanjut);
