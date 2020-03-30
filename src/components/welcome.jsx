import React, { Component } from 'react';

class Welcome extends Component {

    render() {
        const { text } = this.props;

        return (
            <h1>{text}</h1>
        )
    }
}

export default Welcome;