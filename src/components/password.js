import React, { Component } from 'react';


class Password extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 style={styles.name}>{`${this.props.password.passwordName}`}</h1>
                <h1 style={styles.password}>{`${this.props.password.password}`}</h1>
                <h1 style={styles.description}>{`${this.props.password.passwordDescription}`}</h1>
                <h1 style={{color: 'green'}}>**</h1>
            </div>
        );
    }
}

const styles = {
    name: {
        // padding: 10,
        font: 'arial',
        fontSize: 25,
        color: 'black',
    },
    password: {
        // padding: 10,
        font: 'arial',
        fontSize: 20,
        color: 'purple',
        fontStyle: 'italic'
    },
    description: {
        // padding: 10,
        font: 'arial',
        fontSize: 15,
        color: 'blue',
    }
}

export default Password;
