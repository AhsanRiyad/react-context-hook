import React, { Component } from 'react'
import { ThemeContext } from '../context/themecontext'

class Navbar extends Component {
    // this is another approach to consume the context api
    // static contextType = ThemeContext;
    state = {}
    render() {
        // console.log(this.context);
        return (
            //in this way multiple contex can be used, this can be used in functional components
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <nav style={{ background: theme.ui, color: theme.syntax }}>
                        <h1>Context App</h1>
                        <ul>
                            <li> Home </li>
                            <li> About </li>
                            <li> Contact </li>
                        </ul>
                    </nav>
                )
            }}
            </ThemeContext.Consumer>
        );
    }
}
export default Navbar;