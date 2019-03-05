const test = QUnit.test;

function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);

    searchParams.set('searchTerm', searchTerm);

    searchParams.set('page', 1);

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