import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const { string, array } = PropTypes;
const propTypes = {
  title: string.isRequired,
  books: array.isRequired,
};

function renderBooks(bookData) {
  return bookData.map(book => (
    <Book key={book.url} url={book.url} title={book.title} author={book.author} />
  ));
}

function BookShelf(props) {
  const { title, books } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        {renderBooks(books)}
      </div>
    </div>
  );
}

BookShelf.propTypes = propTypes;
export default BookShelf;