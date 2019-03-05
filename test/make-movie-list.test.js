const test = QUnit.test;

function makeMovieList(movie) {
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

test('make correct movie list template', assert => {
    //arrange
    const movie = {
        'title': 'Star Wars',
        'poster_path': '/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg',
        'release_date': '1977-05-25'
    };
    //act
    const result = makeMovieList(movie);
    const expected = /*html*/ `
    <li>
        <h2>Star Wars</h2>
        <img src="https://image.tmdb.org/t/p/w92/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg">
        <p>1977</p>
    </li>`;

    //assert
    assert.htmlEqual(result, expected);
});