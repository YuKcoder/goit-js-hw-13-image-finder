'use strict';

export default {
    apiKey: '23237542-2d5ea559b24d0c907a8c1fa21',
    searchQuery: '',
    pageNumber: 1,

    fetchImages() {
        return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=${this.apiKey}`)
            .then(res => {
                this.incrementPage();
                return res.json();
            })
            .catch(err => console.log(err));
    },

    resetPage() {
        this.pageNumber = 1;
    },

    incrementPage() {
        this.pageNumber += 1;
    },

    get query() {
        return this.searchQuery;
    },

    set query(value) {
        this.searchQuery = value;
    },

};