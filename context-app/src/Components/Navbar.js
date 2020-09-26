import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Navbar() {
    const {theme: themeType, light, dark} = useContext(ThemeContext)
    const theme = themeType === 'light' ? light : dark
    return (
        <div>
           <nav style={{background: theme.ui, color: theme.syntax}}>
               <h1>Context App</h1>
               <ul>
                   <li>Home</li>
                   <li>About</li>
                   <li>Contact</li>
               </ul>
            </nav> 
        </div>
    )
}
