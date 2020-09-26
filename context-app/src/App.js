import React from 'react';
import Navbar from './Components/Navbar'
import Booklist from './Components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  return (
    <div>
    <ThemeContextProvider>
      <Navbar />
      <Booklist />
    </ThemeContextProvider>
    </div>
  );
}

export default App;
