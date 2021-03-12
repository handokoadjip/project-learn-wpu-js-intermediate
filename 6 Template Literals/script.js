//  Template Literal

// String
// `string text`

// Multi-line string
// `String baris 1
// String baris 2
// String baris 3`

// Embedded Expression
// `String ${expression} string`

// HTML Fragments
// `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`

// Expression Interpolation
// `Jika a = 1, b = 2. maka hasil penjumlahannya adalah ${a+b}, bkan ${a*b}`

// Tag Template
// tag `string ${expressione} string`

// HTML FRAGMENTS LANJUTAN
// Loop
// const mhs = [{
//         nama: "Handoko Adji Pangestu",
//         nim: "11217052",
//     },
//     {
//         nama: "Rizkia Nur Safitri",
//         nim: "11217021",
//     },
//     {
//         nama: "CikaCoki",
//         nim: "11217000",
//     },
// ];

// const el = /*html*/ `<div class="mhs">
//     ${mhs.map(m => `
//                 <ul>
//                     <li>${m.nama}</li>
//                     <li>${m.nim}</li>
//                 </ul>`).join("")}
//     </div>`;

// document.body.innerHTML = el;

// Ternary
// const lagu = {
//     judul: 'Asik',
//     penyanyi: 'Rizkianus',
//     feat: 'Handoko'
// }

// const el = /*html */ `<div class="lagu">
//         <ul>
//             <li>${lagu.penyanyi}</li>
//             <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//         </ul>
//     </div>`

// document.body.innerHTML = el;

// Nested
// const mhs = {
//     nama: 'Handoko',
//     semester: 5,
//     mataKuliah: [
//         'Rekayasa Web',
//         'Sistem Pakar',
//         'Aljabar'
//     ]
// }

// function cetakMataKuliah(mataKuliah) {
//     return `<ol>
//         ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
//     </ol>`
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="semester">Semester ${mhs.semester}</span>
//     <h4>MATA KULIAH :</h4>
//     ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;

// document.body.innerHTML = el;

// LANJUTAN TAGED TEMPLATE LITERALS
// untuk highligting
// const nama = 'Handoko';
// const umur = 21;

// function higlight(string, ...values) {
// for
// let result = '';
// string.forEach((str, i) => {
//     result += `${str}${values[i] || ''}`;
// });
// return result;

// reduce
// return string.reduce((result, str, i) => {
//     return `${result}${str}<span class="hl">${values[i] || ''}</span>`
// }, '')
// }

// const str = higlight `Halo, nama saya ${nama}, saya ${umur} tahun`;

// document.body.innerHTML = str;

// PENGGUNAAN LAIN
// - Escaping HTML tags
// - Translation
// - Style Components
