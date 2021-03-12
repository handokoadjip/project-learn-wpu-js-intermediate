// Fetch
// const searchButton = document.querySelector(".search-button");
document.querySelector(".search-button").addEventListener("click", function() {
    fetch(
            "http://www.omdbapi.com/?apikey=df159ef9&s=" +
            document.querySelector(".keyword").value
        )
        .then((responseJson) => responseJson.json())
        .then((response) => {
            const {
                Search: movies
            } = response;
            let cards = "";
            movies.forEach(m => cards += showCard(m));

            document.querySelector('.movie-container').innerHTML = cards;

            // ketika tombol diklik
            const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            modalDetailButton.forEach(btn => {
                btn.addEventListener('click', function() {
                    const imdbid = this.dataset.imdbid;
                    fetch(`http://www.omdbapi.com/?apikey=df159ef9&i=${imdbid}`)
                        .then(responseJson => responseJson.json())
                        .then(response => {
                            const movieDetail = showMovieDetails(response);
                            document.querySelector('.modal-body').innerHTML = movieDetail;
                        })
                });
            });
        });
});

function showCard(m) {
    const {
        Title,
        Year,
        Poster,
        imdbID
    } = m;

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
    const {
        Poster,
        Title,
        Year,
        Director,
        Actors,
        Writer,
        Plot
    } = m;
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