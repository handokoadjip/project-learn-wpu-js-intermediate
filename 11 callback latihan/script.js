$('.search-button').on('click', function() {

    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=df159ef9&s=' + $('.keyword').val(),
        success: result => {
            const {
                Search: movies
            } = result;
            let cards = '';
            movies.map(m => {
                return cards += showCard(m)
            });

            $('.movie-container').html(cards);

            // Ketika tombol di klkik
            $('.modal-detail-button').on('click', function() {
                $.ajax({
                    url: `http://www.omdbapi.com/?apikey=df159ef9&i=${$(this).data('imdbid')}`,
                    success: m => {
                        const movieDetail = showMovieDetails(m);
                        $('.modal-body').html(movieDetail);
                    },
                    error: (e) => {
                        console.error(e.responseText);
                    }
                })
            });

        },
        error: (e) => {
            console.error(e.responseText);
        }
    })

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
        </div>`
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
            </div>`
}