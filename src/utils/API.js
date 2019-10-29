import axios from 'axios';
const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
// const APIKEY = 'process.env.REACT_APP_API_KEY';

export default {
    // searches NYT books according to the search criteria given in the form
    getNewBooks: function(title) {
        return axios.get(BASEURL + title);
    },

    // gets saved books
    getSavedBooks : function() {
        return axios.get('/api/books/');
    },

    // deletes t he book with the chosen id
    deleteBook: function(id) {
        return axios.delete('/api/books/' + id);
    },

    // Saves a book to the db
    savedBook: function(bookData) {
        return axios.post('/api/books', bookData);
    }
};