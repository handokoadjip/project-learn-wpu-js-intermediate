// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(JSON.parse(xhr.response));
//     } else {

//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=df159ef9&s=avengers');
// xhr.send();

// fetch('http://www.omdbapi.com/?apikey=df159ef9&s=avengers')
//     .then(responseJson => responseJson.json())
//     .then(respon => console.log(respon));

// Promise
// states(fulfilled | rejected | pending)
// callback(resolve | reject | finally)
// aksi then() | catch()

// contoh
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('janji ditepati');
//     } else {
//         reject('janji diingkari');
//     }
// });

// janji1
//     .then(response => console.log(`OK! : ${response}`))
//     .catch(response => console.log(`NOT OK! : ${response}`));

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('janji ditepati');
//         }, 2000)
//     } else {
//         setTimeout(() => {
//             reject('janji diingkari');
//         }, 2000)
//     }
// });

// console.log('mulai');
// console.log(janji2.then(response => console.log(janji2)));
// janji2
//     .finally(() => console.log('selesai menunggu'))
//     .then(response => console.log(`OK! : ${response}`))
//     .catch(response => console.log(`NOT OK! : ${response}`));
// console.log('selesai');

// Promise.all() untuk ambil dua api

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'avngers'
        }]);
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            cuaca: 'cerah'
        }]);
    }, 500);
});

Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });