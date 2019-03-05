import { makeMovieList } from '../src/list-component.js';

const test = QUnit.test;

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