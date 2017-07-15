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
  console.log(props);
  return (
    <div key={props.url} className="book">
      <div className="book-top">
        <img className="book-cover" src={props.url} alt={`Book Cover for ${props.title}`} />
        <BookSelection />
      </div>
      <div className="book-title">
        {props.title}
      </div>
      <div className="book-authors">
        {props.author}
      </div>
    </div>
  );
}

Book.propTypes = propTypes;
export default Book;