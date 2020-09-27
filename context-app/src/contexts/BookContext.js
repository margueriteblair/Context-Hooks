import React, { createContext, useReducer } from 'react'
import uuid from 'uuid/v1'
import { bookReducer } from '../Reducers/bookReducer';

export const BookContext = createContext();

export default function BookContextProvider(props) {
    const [books, dispatch] = useReducer(bookReducer, [
        {title: 'A Clockwork Orange', author: "Anthony Burgess", id: 1},
        {title: 'A Hero of Ages', author: "Margie Blair", id: 2},
        {title: 'The Jungle', author: "Upton Sinclair", id: 3},
        {title: 'Open Veins of Latin America', author: "Eduardo Galileano", id: 4}
    
    ])
    // const addBook = (title, author) => {
    //     setBooks([...books, {title: title, author: author, id: uuid()}])
    // }

    // const removeBook = (id)  => {
    //     setBooks(books.filter(book => book.id !== id))
    // }

  return (
    <BookContext.Provider value={{books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  )
}


