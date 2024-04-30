import './App.css';
import { getNews } from '../API_calls';
import { useEffect } from 'react';
import data from '../mock-data';

function App() {
  useEffect(() => {
    getNews()
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>News Reader</h1>
      </header>
    </div>
  );
}

export default App;
