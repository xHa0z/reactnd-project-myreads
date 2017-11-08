import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from "./components/BookList"
import { Route } from 'react-router-dom'
import SearchPage from "./components/SearchPage";


class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.retrieveAllBooks();
  }

  retrieveAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  };



  changeShelf = (id, shelf) => {
    BooksAPI.update({id},shelf).then(()=>{
      this.retrieveAllBooks()

    })
  };

  render() {
    return (
      <div className="app">
        <Route exact path='/search'
           render={({history}) => (
             <SearchPage books = {this.state.books}
                         handleShelfChange={(id,shelf)=>{
                           this.changeShelf(id,shelf);
                           history.push('/')
                         }}
             />
           )}
               />
        <Route exact path='/'
           render = {() => (
               <BookList
                   books={this.state.books}
                   handleShelfChange={(id,shelf)=>{
                     this.changeShelf(id,shelf)
                   }}
               />
           )}
        />

      </div>
    )
  }
}

export default BooksApp
