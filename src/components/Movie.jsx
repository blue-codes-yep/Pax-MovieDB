import React from 'react';
import PropTypes from 'prop-types'

const image = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
    <div>
        <img src={`${image}${movie.poster_path}`} alt={movie.title} />
    </div>
)


export default Movie;

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
}

