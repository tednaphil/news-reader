import { useParams, Link } from "react-router-dom";
import './Article.css';
import { useState, useEffect } from "react";

function Article({articles}) {
    const { articleTitle } = useParams()
    const currentArticle = findArticle(articleTitle)
    const [chosenArticle, setChosenArticle] = useState(currentArticle)
    

    function findArticle(title) {
        return articles.find(article => article.title === title)
    }

    return (
        <>
        <Link to='/'>Back Home</Link>
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
            </main>
        </div>
        </>
    )
}

export default Article