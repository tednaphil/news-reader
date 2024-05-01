import './Preview.css'
import { Link } from 'react-router-dom'

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

export default Preview