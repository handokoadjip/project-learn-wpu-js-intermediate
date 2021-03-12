// callback
// synchronus callback
// function halo(nama) {
//     alert(`Halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt("masukan nama : ");
//     callback(nama);
// }

// tampilkanPesan(halo);
// tampilkanPesan(nama => alert(`Halo ${nama}`));

// asynchonus callback
// vanila
// function getDataMhasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             success(xhr.response);
//         } else {
//             error
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// function success(result) {
//     const mhs = JSON.parse(result);
//     return mhs.forEach(m => console.log(m.nama));
// }

// function error() {

// }
// console.log('mulai');
// getDataMhasiswa('mahasiswa.json', success, error)
// console.log('selesai');

// jquery
// console.log('mulai');
// $.ajax({
//     url: 'mahasiswa.json',
//     success: (mhs) => {
//         mhs.forEach(m => console.log(m.nama));
//     },
//     error: (e) => {
//         console.log(e.responseText);
//     }
// })
// console.log('selesai');