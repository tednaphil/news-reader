import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Article({articles}) {
    const { articleTitle } = useParams()
    const [chosenArticle, setChosenArticle] = useState({})

    function findArticle(title) {
        return articles.find(article => article.title === title)
    }

    useEffect(() => {
        const currentArticle = findArticle(articleTitle)
        setChosenArticle(currentArticle)
        console.log(currentArticle.source)
    }, [articleTitle])



    return (
        <>
        <Link to='/'>Back Home</Link>
        <img src={chosenArticle.urlToImage} alt={`${chosenArticle.description}`} />
        <p className="date">{chosenArticle.date}</p>
        <p className="source">{chosenArticle.source.name}</p>
        <aside>
            <h2>{chosenArticle.title}</h2>
            <p>{chosenArticle.content}</p>
        </aside>
        
        </>
    )
}

export default Article