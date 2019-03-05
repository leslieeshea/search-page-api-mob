//setting query with user's search term and sets page to 1
export function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);

    searchParams.set('searchTerm', searchTerm);

    searchParams.set('page', 1);

    return searchParams.toString();
}
//setting query with existingQuery(existing search term) and setting page number to current page
export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);

    searchParams.set('page', page);

    return searchParams.toString();
}
//reading query and putting it in options object 
export function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const pageString = searchParams.get('page');
    let page = 1;
    if(pageString) {
        page = parseInt(pageString);
    }
    const options = {
        searchTerm: searchParams.get('searchTerm'),
        page: page
    };
    return options;
}
