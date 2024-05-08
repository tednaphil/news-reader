
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './ErrorPage.css';

function ErrorPage({error}) {
    if(error) {
      return(
          <section className='error-message'>
            <h2>Whoops!</h2>
            <p>{error}</p>
            <Link to='/'>Back Home</Link>
          </section>
      )
    }

    if(!error) {
        return(
        <section className='error-message'>
          <h2>Page not found</h2>
          <Link to='/'>Back Home</Link>
        </section>
        )
    }
}

export default ErrorPage;

Error.propTypes = {
  error: PropTypes.string
}