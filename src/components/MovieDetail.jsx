/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { Poster } from './Movie'
import Overdrive from 'react-overdrive'
import styled from 'styled-components';

const image = 'http://image.tmdb.org/t/p/w154';
const backdropImage = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {

    state = {
        movie: {},
    }

    async componentDidMount() {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=9e0f685feeb8c6b73e1db5af73029cec&language=en-US`);
            const movie = await res.json();

            this.setState({
                movie
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { movie } = this.state;
        return (

            <MovieWrapper backdrop={`${backdropImage}${movie.backdrop_path}`}>
                <MovieInfo>
                    <Overdrive id={movie.id}>
                        <Poster src={`${image}${movie.poster_path}`} alt={movie.title} />
                    </Overdrive>
                    <div>
                        <h1>{this.state.movie.title}</h1>
                        <h3>{this.state.movie.release_date}</h3>
                        <p>{this.state.movie.overview}</p>
                    </div>
                </MovieInfo>
            </MovieWrapper>


        );
    }
}

const MovieWrapper = styled.div`
position: relative;
padding-top: 50vh;
background: url(${props => props.backdrop}) no-repeat;
background-size: cover;
`

const MovieInfo = styled.div`
background: white;
text-align: left;
padding: 2rem 10%;
display: flex;
> div {
    margin-left: 20px; 
}
img {
    position: relative;
    top: -5rem;
}
`

export default MovieDetail;