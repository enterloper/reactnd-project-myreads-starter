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

	handleSelect(value, index, shelfTitle) {
		const currentShelf = [...this.state[shelfTitle]];

		if (value === 'none') {
			currentShelf.splice(index, 1);
			this.setState({
				[shelfTitle]: currentShelf,
			});
			return;
		}

		const bookToMove = Object.assign({}, currentShelf.splice(index, 1)[0], { shelf: value });
		const newShelf = [...this.state[value], bookToMove];
		this.setState({
			[shelfTitle]: currentShelf,
			[value]: newShelf,
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
