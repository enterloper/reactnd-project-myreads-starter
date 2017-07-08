import React from 'react';
import PropTypes from 'prop-types';
import BookSelection from './BookSelection';

const { string } = PropTypes;
const propTypes = {
  url: string,
  title: string,
  author: string,
};

function Book(props) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ backgroundImage: props.url }}></div>
          <BookSelection />
        </div>
        <div className="book-title">
          {props.title}
        </div>
        <div className="book-authors">
          {props.author}
        </div>
      </div>
    </li>
  );
}

Book.propTypes = propTypes;
export default Book;