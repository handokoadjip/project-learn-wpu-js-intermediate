function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("kelamaan");
    }
  });
}

async function asyncAwait() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (error) {
    console.error(error);
  }
}

asyncAwait();
