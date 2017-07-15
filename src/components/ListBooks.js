import React, { Component } from 'react'
// import * as BooksAPI from '../BooksAPI'
// import PropTypes from 'prop-types'
import BookShelf from './BookShelf';
import mockLibrary from '../data/mockLibrary';

class ListBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchPage: this.props.location === '/search',

    };
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch() {
    const dropPoint = window.location.pathname === '/' ?
      'http://localhost:3000/search' :
      'http://localhost:3000/';

    window.location.assign(dropPoint);
    this.setState({
      showSearchPage: !this.state.showSearchPage,
    });
  }
  
  selectionTest() {
    console.log("Hello from selectionTest method / function");
  }

  renderBookShelves(bookSectionData) {
    return bookSectionData.map(section =>
      <BookShelf key={section.title} title={section.title} books={section.books} />
    );
  }

  render() {
    console.log("ListBook Props:", this.props);
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={this.toggleSearch}>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {this.renderBookShelves(mockLibrary)}
              </div>
            </div>
            <div className="open-search">
              <a onClick={this.toggleSearch}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default ListBooks
