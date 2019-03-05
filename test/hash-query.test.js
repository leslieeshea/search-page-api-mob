const test = QUnit.test;

function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);

    searchParams.set('searchTerm', searchTerm);

    searchParams.set('page', 1);

    return searchParams.toString();
}
function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);

    searchParams.set('page', page);

    return searchParams.toString();
}

test('add search to empty query', assert => {
    //arrange
    const existingQuery = '';
    const searchTerm = 'star wars';
    //act
    const query = writeSearchToQuery(existingQuery, searchTerm);
    const expected = 'searchTerm=star+wars&page=1';
    //assert
    assert.equal(query, expected);
});

test('add search existing query changes search and resets page', assert => {
    //arrange
    const existingQuery = 'searchTerm=star+wars&page=2';
    const searchTerm = 'harry potter';
    //act
    const query = writeSearchToQuery(existingQuery, searchTerm);
    const expected = 'searchTerm=harry+potter&page=1';
    //assert
    assert.equal(query, expected);
});

test('write page to existing query', assert => {
    //arrange
    const existingQuery = 'searchTerm=harry+potter&page=1';
    const page = 3;
    //act
    const query = writePageToQuery(existingQuery, page);
    const expected = 'searchTerm=harry+potter&page=3';
    //assert
    assert.equal(query, expected);
});