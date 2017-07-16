import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI'
// import debounce from 'lodash.debounce';

const propTypes = {
	toggleSearch: PropTypes.func.isRequired,
};

class SearchPage extends Component {
	state = {
		searchValue: '',
	};

	componentDidMount() {
		const test = BooksAPI.search('Android', 50);
		console.log(test);
	}

	handleSearch = (e) => {
		this.setState({
			searchValue: e.target.value,
		});
		console.log(this.state.searchValue)
	};

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<a className="close-search" onClick={this.props.toggleSearch}>Close</a>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							onKeyUp={this.handleSearch}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid"></ol>
				</div>
			</div>
		);
	}
}

SearchPage.propTypes = propTypes;
export default SearchPage;