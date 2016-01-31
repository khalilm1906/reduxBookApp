import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
          onClick={ () => this.props.selectBook(book)}
          className="list-group-item">
            {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//Anything returned from this function will end up as props
//on the BookList container
function mapReduxStateToProps(state) {
  return {
    books: state.books
  }
}
//Whenever selectBook is called, the result should be passed
//to all of our reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
};


//Promote BoookList from a component to a container component - it needs to know
//about this ne dispatch methos, selectBook. Make it avialable a prop.
export default connect(mapReduxStateToProps, mapDispatchToProps)(BookList);
