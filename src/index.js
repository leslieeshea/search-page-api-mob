import movies from '../data/movie.js';
import loadMovies from './list-component.js';
import './search-component.js';

loadMovies(movies);

const url = new URL('https://api.themobiedb.org/3/search/movie');

url.searchParams.set('query', 'star wars');

url.toString();