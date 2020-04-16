/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';


const image = 'http://image.tmdb.org/t/p/w154';


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
            <div>
                <img src={`${image}${movie.poster_path}`} alt={movie.title} />

                <h1>{this.state.movie.title}</h1>
                <h3>{this.state.movie.release_date}</h3>
                <p>{this.state.movie.overview}</p>
            </div>

        );
    }
}


export default MovieDetail;