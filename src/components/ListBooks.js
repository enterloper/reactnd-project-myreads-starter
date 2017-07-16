import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BookShelfPage, SearchPage } from '../pages';

const { array, func } = PropTypes;
const propTypes = {
	currentlyReading: array,
	wantToRead: array,
	read: array,
	handleSelect: func,
};

class ListBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
	    showSearchPage: this.props.location === '/search',
    };
		
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch() {
  	const ROOT_URL = 'http://localhost:3000/';
    const dropPoint = window.location.pathname === '/' ? `${ROOT_URL}search` : ROOT_URL;

    window.location.assign(dropPoint);
    this.setState({
    	showSearchPage: !this.state.showSearchPage,
    });
  }

  render() {
  	const { currentlyReading, wantToRead, read, handleSelect } = this.props;
  	const bookShelves = [
		  {
			  title: 'Currently Reading',
			  books: currentlyReading,
		  },
		  {
			  title: 'Want to Read',
			  books: wantToRead,
		  },
		  {
			  title: 'Read',
			  books: read,
		  },
	  ];

    return (
      <div className="app">
        {this.state.showSearchPage ?
	        <SearchPage toggleSearch={this.toggleSearch}/> :
	        <BookShelfPage
		        bookShelves={bookShelves}
		        toggleSearch={this.toggleSearch}
		        handleSelect={handleSelect}
	        />
        }
      </div>
    )
  }
}

ListBooks.propTypes = propTypes;
export default ListBooks;
