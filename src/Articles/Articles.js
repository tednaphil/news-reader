import './Articles.css';
import Preview from "../Preview/Preview";
import PropTypes from 'prop-types';

function Articles({articles}) {
    const previews = articles.map(({publishedAt, title, urlToImage, date, description}) => {
        return (
            <Preview 
            key={publishedAt}
            title={title}
            image={urlToImage}
            date={date}
            description={description}
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

export default Articles;

Articles.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
}