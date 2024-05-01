import './App.css';
import { getNews } from '../API_calls';
import { useEffect, useState } from 'react';
import Articles from '../Articles/Articles';
import Article from '../Article/Article';
import ErrorPage from '../ErrorPage/ErrorPage';
import Search from '../Search/Search';
import data from '../mock-data';
import { Routes, Route, useLocation } from 'react-router-dom';


function App() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const {pathname} = useLocation()

  useEffect(() => {
    // getNews()
    const newData = cleanData(data.articles)
    setArticles(newData)
    setFilteredArticles(newData)
  }, [])

  useEffect(() => {
    const filtered = filterArticles(query)
    // console.log({filtered})
    if (query.trim().length){
      setFilteredArticles(filtered)
    }
  }, [query])

  function cleanData(articlesArray) {
    const updatedData = articlesArray

    updatedData.forEach(article => {
      const splitDate = article.publishedAt.split('T')[0].split('-')
      article.date = `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`
      //add keywords array for searchability?
      if(!article.urlToImage) {
        article.urlToImage = 'https://media.istockphoto.com/id/1312793811/vector/hand-drawn-newspaper-sketch-icon.jpg?s=612x612&w=0&k=20&c=G4XPIMfzF2b0YARccTEYTltB4P0j59xMeLymwFs7FSE='
      }
      if(!article.description) {
        article.description = 'no description available'
      }
    })
    return updatedData
  }

  function filterArticles(queryInput) {
    // console.log({queryInput})
    // articles.forEach(article => console.log(article.title.includes(queryInput)))
    return articles.filter(article => article.title.toLowerCase().includes(queryInput) || article.description.toLowerCase().includes(queryInput))
  }

  if (articles.length) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>News Reader</h1>
          {pathname === '/' && <Search setQuery={setQuery} />}
        </header>
        {/* {query.trim().length > 0 && <p>Results: {filteredArticles.length}</p>} */}
        <Routes>
          <Route path='/' element={<Articles articles={filteredArticles} />}></Route>
          <Route path='/:articleTitle' element={<Article articles={articles}/>}></Route>
          <Route path='/*' element={<ErrorPage error={error} />}></Route>
        </Routes>
      </div>
  )};
}

export default App;
