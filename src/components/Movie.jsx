import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const image = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (

    <Link to={`/${movie.id}`}>
        <Poster src={`${image}${movie.poster_path}`} alt={movie.title} />
    </Link>

)


Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
}

export const Poster = styled.img`
box-shadow: 0 0 35px black;

`

export default Movie;


