import React, { Component } from 'react'
import './App.css'
import ListBooks from './components/ListBooks';
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
      location: window.location.pathname,
    };
  }

  componentDidMount() {
    const currentlyReading = [];
    const wantToRead = [];
    const read = [];
    BooksAPI.getAll().then(books => {
      books.forEach(book => {
        if(book.shelf === 'currentlyReading') {
          currentlyReading.push(book);
        }
        if(book.shelf === 'wantToRead') {
          wantToRead.push(book);
        }
        if(book.shelf === 'read') {
          read.push(book);
        }
      });

	    this.setState({
	      books,
        currentlyReading,
        wantToRead,
        read,
      });
    });
  }

  render() {
    const { location, currentlyReading, wantToRead, read } = this.state;
    return (
      <div>
        <ListBooks
          location={location}
          currentlyReading={currentlyReading}
          wantToRead={wantToRead}
          read={read}
        />
      </div>
    )
  }
}

export default BooksApp
