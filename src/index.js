import movies from '../data/movie.js';
import loadMovies from './list-component.js';
import './search-component.js';
import { readFromQuery } from './query-component.js';
import { updateSearchInput } from './search-component.js';

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    console.log(queryOptions);
    updateSearchInput(queryOptions.searchTerm);
});