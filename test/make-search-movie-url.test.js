import makeSearchMovieUrl from '../src/make-search-movie-url.js';
const test = QUnit.test;

test('url includes query and page', assert => {
    //arrange
    const queryOptions = {
        searchTerm: 'batman',
        page: 2
    };
    const expected = 'https://api.themoviedb.org/3/search/movie?api_key=cb74bb60617505504abd12bd45490b45&language=en-us&include_adult=false&query=batman&page=2';

    //act
    const url = makeSearchMovieUrl(queryOptions);

    //assert
    assert.equal(url, expected);
});

test('returns empty url if no search term', assert => {
    //arrange
    const queryOptions = {
        searchTerm: '',
        page: 1
    };
    const expected = '';
    //act
    const url = makeSearchMovieUrl(queryOptions);
    //assert
    assert.equal(url, expected);
});