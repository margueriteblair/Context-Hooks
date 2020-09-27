import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext'
import { BookContext } from '../contexts/BookContext';

export default function Navbar() {
    // const {theme: themeType, light, dark} = useContext(ThemeContext)
    // const {isAuthorized, toggleAuth} = useContext(AuthContext)
    // const theme = themeType === 'light' ? light : dark
    const {books} = useContext(BookContext)
    return (
        <div className="navbar">
            <nav>
           {/* <nav style={{background: theme.ui, color: theme.syntax}}> */}
               <h1>Margie's Reading List</h1>
                <h3>Currently, you have {books.length} books to get through...</h3>
               {/* <div onClick={toggleAuth}>
                    {isAuthorized ? 'Logged in' : "Logged out"}
               </div>
               <ul>
                   <li>Home</li>
                   <li>About</li>
                   <li>Contact</li>
               </ul> */}
            </nav> 
        </div>
    )
}
