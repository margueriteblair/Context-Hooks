import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Booklist() {
    const {theme: themeType, light, dark} = useContext(ThemeContext)
    const theme = themeType === 'light' ? light : dark

    return (
        <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                <li style = {{background: theme.ui}}>The Way Of Kings</li>
                <li style = {{background: theme.ui}}>The Name of the Wind</li>
                <li style = {{background: theme.ui}}>A Clockwork Orange</li>

            </ul>
        </div>
    )
}
