import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Books extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    handleShelfChange: PropTypes.func.isRequired
  };

  handleShelfChange = (e) => {
    alert(e.target.value);
    this.props.handleShelfChange(e.target.value)
  };

  render() {
    const { title, authors, shelf, imageLinks} = this.props;
    const imageURL = imageLinks.thumbmail || imageLinks.smallThumbnail
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{width: 125, height: 175, backgroundImage: `url(${imageURL})`}}></div>
          <div className="book-shelf-changer">
            <select onChange={this.handleShelfChange} value={shelf}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          <ul>
            {authors.map((author, index) => (<li key={index}>{author}</li>))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Books