// Spread Operator
// const mhs = ['han', 'hin', 'hun'];
// console.log(...mhs);
// console.log(...mhs[0]);

// - menggabungkan array
// const mhs = ['han', 'hin'];
// const mhsBaru = ['hun', 'hen'];

// const gbng = mhs.concat(mhsBaru);
// const gbng = [...mhs, 'lulu', ...mhsBaru];
// console.log(gbng);

// copy array
// const mhs = ['han', 'hin', 'hun'];
// const copy = [...mhs];
// copy[0] = 'Handoko';

// console.log(mhs);
// console.log(copy);

// LATIHAN
// const li = document.querySelectorAll('ul li');
// let nama = [];
// for (const n of li) {
//     nama.push(n.textContent);
// }

// const nama = [...li].map(n => n.textContent);
// console.log(nama);

// LATIHAN
// const nama = document.querySelector(".nama");
// const huruf = [...nama.textContent].map((n) => `<span>${n}</span>`).join("");

// nama.innerHTML = huruf;
// console.log(huruf);

// Rest Parameter
// function myFunc(a, b, ...myArgs) {
//   return `a = ${a}, b = ${b}, sisanya = ${myArgs}`;
// }

// console.log(myFunc(1, 2, 4, 5, 6));

// - jumlah
// function jumlahkan(...myArgs) {
//   return myArgs.reduce((t, a) => a + t);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

//  - Array Destructuring
// const klm1 = ["Han", "Riz", "Gle", "Aud", "iqb"];
// const [ketua, wakil, ...anggota];

// Object Destructuring
// const klm = {
//   ketua: "han",
//   angota1: "jun",
//   angota2: "jen",
//   angota3: "jon",
// };

// const { ketua, ...anggota } = klm;

// LATIHAN
// function filterBy(type, ...values) {
//   return values.filter((v) => typeof v === type);
// }

// console.log(filterBy("number", 1, 2, 3, "han", "hin", true.false));
