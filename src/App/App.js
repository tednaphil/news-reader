import './App.css';
import { getNews } from '../API_calls';
import { useEffect, useState } from 'react';
import Articles from '../Articles/Articles';
import Article from '../Article/Article';
import ErrorPage from '../ErrorPage/ErrorPage';
import data from '../mock-data';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getNews()
    const newData = cleanData(data.articles)
    setArticles(newData)
  })

  function cleanData(articlesArray) {
    const updatedData = articlesArray

    updatedData.forEach(article => {
      if(!article.urlToImage) {
        article.urlToImage = 'https://media.istockphoto.com/id/1312793811/vector/hand-drawn-newspaper-sketch-icon.jpg?s=612x612&w=0&k=20&c=G4XPIMfzF2b0YARccTEYTltB4P0j59xMeLymwFs7FSE='
      }
      if(!article.description) {
        article.description = 'no description available'
      }
    })
    return updatedData
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>News Reader</h1>
      </header>
      <Routes>
        <Route path='/' element={<Articles articles={articles} />}></Route>
        <Route path=':articleTitle' element={<Article/>}></Route>
        <Route path='*' element={<ErrorPage error={error} />}></Route>
      </Routes>
    </div>
  );
}

export default App;