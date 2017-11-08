import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from "./BookShelf";
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
  state = {
    query: '',
    books: [],
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim()})
    this.searchBooks(query.trim())
  }

  searchBooks = (value) => {

  }
}

export default SearchPage