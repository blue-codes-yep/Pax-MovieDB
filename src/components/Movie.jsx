import React, { Component } from 'react';
import App from '../App'

class Movie extends Component {
    render() {
        return (
            <div>
                {this.props.movie.title}
            </div>
        )
    }
}


export default Movie;