import './Preview.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Preview({ image, title, description, date }) {
    return (
        <>
        <section className='article-preview'>
            <img className='preview-image' src={image} alt=''/>
            <div className='preview-text'>
                <h2>{title}</h2>
                <p><span>{date}</span> | {description}</p>
                <Link to={`/articles/${title}`}>Read Article</Link>
            </div>
        </section>
        </>
    )
}

export default Preview;

Preview.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}