import './App.css'
import { useState, useContext, createContext } from 'react';

const ThemeContext = createContext();

function App() { // root component
  const [theme, setTheme] = useState('light');


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar() { // theme기능 사용 X
  return (
    <div>
      <h3>Toolbar</h3>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() { // theme기능 사용 O
  const { theme, setTheme } = useContext(ThemeContext); // 전역자원 쓸거야

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
}

export default App;

