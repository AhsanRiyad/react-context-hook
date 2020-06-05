import React, { Component } from 'react'
import { ThemeContext } from '../context/themecontext'

class ToggleTheme extends Component {
    static contextType = ThemeContext;
    render() {
        const { themeToggle } = this.context;
        return (
            <button onClick={themeToggle}>
                Toggle Theme
            </button>
        );
    }
}

export default ToggleTheme;
