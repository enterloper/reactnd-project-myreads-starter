import PropTypes from 'prop-types';

const { bool, string, array, object, number, shape } = PropTypes;
const bookPropType = shape({
	allowAnonLogging:	bool,
	authors:	array,
	averageRating: number,
	canonicalVolumeLink: string,
	categories: array,
	contentVersion:	string,
	description: string,
	id:	string,
	imageLinks:	object,
	industryIdentifiers: array,
	infoLink:	string,
	language:	string,
	maturityRating:	string,
	pageCount:	number,
	panelizationSummary:	object,
	previewLink:	string,
	printType:	string,
	publishedDate:	string,
	publisher:	string,
	ratingsCount:	number,
	readingModes:	object,
	shelf:	string,
	subtitle:	string,
	title:	string,
});

export default bookPropType;