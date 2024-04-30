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
    return(
        <>
        {previews}
        </>
    )
}

export default Articles