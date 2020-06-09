import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Booklist from './components/booklist';
import ThemeContextProvider from './context/themecontext';
import ThemeToggle from './components/toggleTheme';
import AuthContextProvider from './context/authContext';
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />

          <BookContextProvider>
            <Booklist />
          </BookContextProvider>


          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
