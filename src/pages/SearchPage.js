import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	toggleSearch: PropTypes.func,
};

function SearchPage(props) {
	return (
		<div className="search-books">
			<div className="search-books-bar">
				<a className="close-search" onClick={props.toggleSearch}>Close</a>
				<div className="search-books-input-wrapper">
					<input type="text" placeholder="Search by title or author"/>
				</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid"></ol>
			</div>
		</div>
	);
}

SearchPage.propTypes = propTypes;
export default SearchPage;