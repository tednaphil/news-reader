
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function ErrorPage({error}) {
    if(error) {
      return(
          <>
            <h2>Something went wrong!</h2>
            <p>{error}</p>
          </>
      )
    }

    if(!error) {
        return(
        <>
          <h2>Page not found</h2>
          <Link to='/'>Back Home</Link>
        </>
        )
    }
}

export default ErrorPage;

Error.propTypes = {
  error: PropTypes.string
}