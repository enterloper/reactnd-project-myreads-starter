import React, { Component } from 'react'
// import * as BooksAPI from '../BooksAPI'
// import PropTypes from 'prop-types'
import BookShelf from './BookShelf';
import mockLibrary from '../data/mockLibrary';

class ListBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  selectionTest() {
    console.log("Hello from selectionTest method / function");
  }

  renderBookShelves(bookSectionData) {
    return bookSectionData.map(section =>
      <BookShelf title={section.title} books={section.books} />
    );
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default ListBooks
