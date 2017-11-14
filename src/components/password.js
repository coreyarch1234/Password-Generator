import React, { Component } from 'react';


class Password extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 style={styles.password}>{this.props.password}</h1>
            </div>
        );
    }
}

const styles = {
    password: {
        fontSize: 22,
        padding: 10
    }
}

export default Password;
