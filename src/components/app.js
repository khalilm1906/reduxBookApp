import React from 'react';
import { Component } from 'react';
import BookDetail from '../containers/book-detail'
import BookList from '../containers/books-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
