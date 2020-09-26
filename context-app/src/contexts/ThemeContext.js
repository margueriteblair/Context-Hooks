import React, { createContext, useState } from 'react'

const themes = {
    light: {
        syntax: '#555',
        ui: '#ddd',
        bg: '#eee'
    },
    dark: {
        syntax: '#ddd',
        ui: '#333', 
        bg: '#555'
    }
}

export const ThemeContext = createContext()
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

export default function ThemeContextProvider() {
    
    return (
        <div>
            <ThemeContext.Provider value={{...themes, toggleTheme, theme}}>
                {this.props.children}
            </ThemeContext.Provider>
        </div>
    )
}
