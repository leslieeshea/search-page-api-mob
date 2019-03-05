export function makeMovieList(movie) {
    const html = /*html*/
    `<li>
        <h2>${movie.title}</h2>
        <img src="https://image.tmdb.org/t/p/w92${movie.poster_path}">
        <p>${movie.release_date.slice(0, 4)}</p>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
}

const movieList = document.getElementById('movie-list');

export default function loadMovies(movies) {
    movies.forEach(movie => {
        const dom = makeMovieList(movie);
        movieList.appendChild(dom);
    });
}