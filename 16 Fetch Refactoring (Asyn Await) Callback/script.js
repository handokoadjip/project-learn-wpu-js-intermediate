const searchButton = document.querySelector(".search-button");
document
  .querySelector(".search-button")
  .addEventListener("click", async function () {
    try {
      const movies = await getMovies(document.querySelector(".keyword").value);
      updateUI(movies);
    } catch (error) {
      // console.log(error);
      alert(error);
    }
  });

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=df159ef9&s=" + keyword)
    .then((responseJson) => {
      // chek dari responseJson
      if (responseJson.ok === false) {
        throw new Error(responseJson.statusText);
      }
      return responseJson.json();
    })
    .then((response) => {
      // chek dari response
      if (response.Response === "False") {
        throw new Error(response.Error);
      }
      return response.Search;
    });
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((m) => (cards += showCard(m)));

  document.querySelector(".movie-container").innerHTML = cards;
}

//   event binding | delegation
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMoviesDetail(imdbid);
    console.log(movieDetail);

    updateUIDetail(movieDetail);
  }
});

function getMoviesDetail(id) {
  return fetch(`http://www.omdbapi.com/?apikey=df159ef9&i=${id}`)
    .then((responseJson) => responseJson.json())
    .then((response) => response);
}

function updateUIDetail(movie) {
  const movieDetail = showMovieDetails(movie);
  document.querySelector(".modal-body").innerHTML = movieDetail;
}

function showCard(m) {
  const { Title, Year, Poster, imdbID } = m;
  return ` <div class="col-md-4 my-3">
            <div class="card">
                <img src="${Poster}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-imdbid="${imdbID}" data-toggle="modal" data-target="#exampleModal">Show Detail</a>
                </div>
            </div>
        </div>`;
}

function showMovieDetails(m) {
  const { Poster, Title, Year, Director, Actors, Writer, Plot } = m;
  return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${Poster}" alt="" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <h4>${Title}${Year}</h4>
                            </li>
                            <li class="list-group-item"><strong>Director:</strong>${Director}</li>
                            <li class="list-group-item"><strong>Actor :</strong>${Actors}</li>
                            <li class="list-group-item"><strong>Writer :</strong>${Writer}</li>
                            <li class="list-group-item"><strong>Plot :</strong><br>${Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}
