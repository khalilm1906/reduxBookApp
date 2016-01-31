export function selectBook(book) {
  //selectBook is an actioCreator, it needs to return an action,
  //an object with at type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
};
