import './Articles.css';
import Preview from "../Preview/Preview";
import PropTypes from 'prop-types';

function Articles({articles}) {
    const previews = articles.map(({publishedAt, title, urlToImage, date, description}, index) => {
        return (
            <Preview 
            key={index}
            title={title}
            image={urlToImage}
            date={date}
            description={description}
            />
        )
    })

    if(articles.length) {
        return(
            <section className='articles'>
              {previews}
            </section>
        )
    }
    if (!articles.length) {
        return(
            <>
              <h2 className='articles'>No results</h2>
            </>
        )
    }
}

export default Articles;

Articles.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired
}