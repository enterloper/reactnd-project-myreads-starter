import React from 'react'

function BookSelection(props) {
  const { handleSelect, bookTitle, index, shelfTitle } = props;
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => handleSelect(e.target.value, bookTitle, index, shelfTitle)}
        defaultValue={shelfTitle}
      >
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookSelection;
