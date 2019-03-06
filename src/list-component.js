export function makeMovieList(movie) {
    let posterPath = null;
    if(movie.poster_path) {
        posterPath = `https://image.tmdb.org/t/p/w92${movie.poster_path}`;
    }
    else {
        posterPath = '../assets/movie-placeholder.png';
    }

    const html = /*html*/
    `<li>
        <h2>${movie.title}</h2>
        <img src="${posterPath}">
        <p>${movie.release_date.slice(0, 4)}</p>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
}

const movieList = document.getElementById('movie-list');

export default function loadMovies(movies) {
    clearMovies();
    movies.forEach(movie => {
        const dom = makeMovieList(movie);
        movieList.appendChild(dom);
    });
}

function clearMovies() {
    while(movieList.firstChild) {
        movieList.firstChild.remove();
    }
}
