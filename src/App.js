import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Booklist from './components/booklist';
import ThemeContextProvider from './context/themecontext';
import ThemeToggle from './components/toggleTheme';
import AuthContextProvider from './context/authContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Booklist />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
