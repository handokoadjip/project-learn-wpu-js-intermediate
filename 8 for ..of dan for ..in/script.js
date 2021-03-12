// for ..of
// dapat looping object itterable

// String
// const nama = 'Handoko';
// for (const n of nama) {
//     console.log(n);
// }

// Array
// const mhs = ['han', 'hin', 'hun'];
// for (const m of mhs) {
//     console.log(m);
// }

// const mhs = ['han', 'hin', 'hun'];
// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} ke ${i + 1}`);

// }

// ArrayLikeObject [arguments, node list]
// NODELIST
// const liNama = document.querySelectorAll('.nama');
// for (n of liNama) {
//     console.log(`${n.textContent}`);

// }

// ARGUMENTS
// function jumlahkanAngka() {
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }
// console.log(jumlahkanAngka(1, 2, 4));

// function jumlahkanAngka(...values) {
//     return values.reduce((total, angka) => total + angka);
// }
// console.log(jumlahkanAngka(1, 3, 2, 4));

// for ... in
// untuk enumerable

// const mhs = {
//     nama: 'han',
//     umur: 20,
//     email: 'han@han.com'
// }

// for (m in mhs) {
//     console.log(m + ': ' + mhs[m]);
// }
