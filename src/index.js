import loadMovies from './list-component.js';
import './search-component.js';
import { readFromQuery } from './query-component.js';
import { updateSearchInput } from './search-component.js';
import makeSearchMovieUrl from './make-search-movie-url.js';
import { updatePagingInfo } from './paging-component.js';
const prompt = document.getElementById('prompt');
const moviesContainer = document.getElementById('movies-container');

window.addEventListener('hashchange', loadQuery);

loadQuery();

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchInput(queryOptions.searchTerm);
    const url = makeSearchMovieUrl(queryOptions);

    if(!url) {
        prompt.classList.remove('hidden');
        moviesContainer.classList.add('hidden');
        return;
    }
    else {
        prompt.classList.add('hidden');
        moviesContainer.classList.remove('hidden');
    }

    fetch(url)
        .then(response => response.json())
        .then(movies => {
            loadMovies(movies.results);
            const pagingInfo = {
                page: movies.page,
                totalPages: movies.total_pages
            };
            updatePagingInfo(pagingInfo);
        })
        .catch(err => {
            /* eslint-disable-next-line*/
            console.error('fetch error:', err);
        });
}