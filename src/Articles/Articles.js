import './Articles.css';
import Preview from "../Preview/Preview";

function Articles({articles}) {
    const previews = articles.map(article => {
        return (
            <Preview 
            key={article.publishedAt}
            title={article.title}
            image={article.urlToImage}
            date={article.date}
            description={article.description}
            />
        )
    })
    if(articles.length) {
        return(
            <>
            {previews}
            </>
        )
    }
    if (!articles.length) {
        return(
            <>
            <h2>No results</h2>
            </>
        )
    }
    
}

export default Articles