import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const { string, array, func } = PropTypes;
const propTypes = {
  title: string.isRequired,
  books: array.isRequired,
	handleSelect: func.isRequired,
};

function renderBooks(bookData, handleSelect) {
  return bookData.map((book, index) => (
    <Book
	    key={book.imageLinks.thumbnail}
      url={book.imageLinks.thumbnail}
      title={book.title}
      author={book.authors[0]}
	    handleSelect={handleSelect}
      shelfTitle={book.shelf}
      index={index}
    />)
  );
}

function BookShelf(props) {
  const { title, books, handleSelect } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        {renderBooks(books, handleSelect)}
      </div>
    </div>
  );
}

BookShelf.propTypes = propTypes;
export default BookShelf;