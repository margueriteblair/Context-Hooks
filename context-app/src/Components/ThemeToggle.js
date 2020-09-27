import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function ThemeToggle() {
    const {toggleTheme} = useContext(ThemeContext)
    return (
        <div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}
