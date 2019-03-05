import { writeSearchToQuery } from './query-component.js';
const searchForm = document.getElementById('search');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    
    const formData = new FormData(searchForm);
    const searchInput = formData.get('search-input');
    //gets rid of hash
    const existingQuery = window.location.hash.slice(1);

    const newQuery = writeSearchToQuery(existingQuery, searchInput);

    window.location.hash = newQuery;
});

export function updateSearchInput(searchTerm) {
    searchInput.value = searchTerm;
}
