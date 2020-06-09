import React, { useContext } from 'react'
import { ThemeContext } from '../context/themecontext'

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="book-list" style={{ background: theme.syntax, color: theme.bg }}>
            <ul>
                <li style={{ background: theme.ui }} >the way of king</li>
                <li style={{ background: theme.ui }} >name of the wing</li>
                <li style={{ background: theme.ui }} >empire statet</li>
            </ul>
        </div>

    );
}

export default BookList;

