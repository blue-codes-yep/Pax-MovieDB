import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const image = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
    <div>
        <Link to="/test">
            <img src={`${image}${movie.poster_path}`} alt={movie.title} />
        </Link>
    </div>
)


export default Movie;

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
}

