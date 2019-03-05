const searchForm = document.getElementById('search');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    
    const formData = new FormData(searchForm);
    const searchInput = formData.get('search-input');
    const url = new URL('https://api.themoviedb.org/3/search/movie');
    url.searchParams.set('query', searchInput);
    url.searchParams.set('api-key', 'cb74bb60617505504abd12bd45490b45');
    console.log(url);
    
});