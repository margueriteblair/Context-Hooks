import React from 'react';
import Navbar from './Components/Navbar'
import Booklist from './Components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext'
import ThemeToggle from './Components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext'
import BookContextProvider from './contexts/BookContext'
import BookForm from './Components/BookForm';

function App() {
  return (
    <div>
      <BookContextProvider>
        <Navbar/>
        <Booklist/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
