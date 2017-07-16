import React from 'react';
import PropTypes from 'prop-types';
import BookSelection from './BookSelection';

const { string } = PropTypes;
const propTypes = {
  url: string,
  title: string,
	subtitle: string,
  author: string,
};

function Book(props) {
	const { title, url, handleSelect, shelfTitle, index, author } = props;
  return (
    <div className="book">
      <div className="book-top">
        <img
	        className="book-cover"
	        src={url}
	        alt={`Book Cover for ${title}`}
        />
        <BookSelection
	        bookTitle={title}
	        handleSelect={handleSelect}
          shelfTitle={shelfTitle}
          index={index}
        />
      </div>
      <div className="book-title">
        {title}
      </div>
      <div className="book-authors">
        {author}
      </div>
    </div>
  );
}

Book.propTypes = propTypes;
export default Book;