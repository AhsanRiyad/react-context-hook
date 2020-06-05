import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Booklist from './components/booklist';
import ThemeContextProvider from './context/themecontext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
