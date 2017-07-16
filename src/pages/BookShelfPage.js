import React from 'react';
import PropTypes from 'prop-types';
import bookPropType from '../propTypes/bookPropType';
import BookShelf from '../components/BookShelf';

const { shape, string, arrayOf, func } = PropTypes;
const propTypes = {
	bookShelves: arrayOf(shape({
			title: string,
			books: arrayOf(bookPropType),
		})
	).isRequired,
	toggleSearch: func.isRequired,
	handleSelect: func.isRequired,
};

function renderBookShelves(bookSectionData, handleSelect) {
	return bookSectionData.map(section => (
			<BookShelf
				key={section.title}
				title={section.title}
				books={section.books}
			  handleSelect={handleSelect}
			/>
		)
	);
}

function BookShelfPage(props) {
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				{renderBookShelves(props.bookShelves, props.handleSelect)}
			</div>
			<div className="open-search">
				<a onClick={props.toggleSearch}>Add a book</a>
			</div>
		</div>
	);
}

BookShelfPage.propTypes = propTypes;
export default BookShelfPage;