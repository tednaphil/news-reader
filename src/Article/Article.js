import { useParams, Link } from "react-router-dom";
import './Article.css';
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function Article({articles, setQuery, setFilteredArticles}) {
    const { articleTitle } = useParams()
    const currentArticle = findArticle(articleTitle)
    const [chosenArticle, setChosenArticle] = useState(currentArticle)
    
    useEffect(() => {
        setQuery('')
        setFilteredArticles(articles)
    }, [])
    

    function findArticle(title) {
        return articles.find(article => article.title === title)
    }

    if(chosenArticle) {
        return(
            <>
            <Link className='home-button' to='/'>Back Home</Link>
            <div className='article-view'>
                <aside className='summary-column'>
                    <img src={chosenArticle.urlToImage} alt={`${chosenArticle.description}`} />
                    <p className="date">{chosenArticle.date}</p>
                    <p className="source">source: {chosenArticle.source.name}</p>
                </aside>
                <main className='content-column'>
                    <h2>{chosenArticle.title}</h2>
                    {chosenArticle.author && <h3>Author: {chosenArticle.author}</h3>}
                    <p>{chosenArticle.content}</p>
                    <a href={chosenArticle.url}>See full article</a>
                </main>
            </div>
            </>
        )
    }

    if(!chosenArticle) {
        return(
            <>
                <h2>Whoops! Article not found.</h2>
                <Link to='/'>Back Home</Link>
            </>
        )
    }
}

export default Article;

Article.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    setQuery: PropTypes.func.isRequired,
    setFilteredArticles: PropTypes.func.isRequired
}