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
    
    this.handleSelect = this.handleSelect.bind(this);
  }



	handleSelect(value, bookTitle, index, shelfTitle) {
		console.log('TITLE:', bookTitle);
		console.log('VALUE:', value);
		console.log('SHELFTITLE:', shelfTitle);
		const currentShelf = [...this.state[shelfTitle]];

		if (value === 'none') {
			currentShelf.splice(index, 1);
			this.setState({
				[shelfTitle]: currentShelf,
			});
		}

		if (value === 'currentlyReading') {
			const bookToMove = currentShelf.splice(index, 1);
			const newShelf = [...this.state.currentlyReading, bookToMove[0]];
			this.setState({
				[shelfTitle]: currentShelf,
				currentlyReading: newShelf,
			});
		}
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
          handleSelect={this.handleSelect}
        />
      </div>
    )
  }
}

export default BooksApp
