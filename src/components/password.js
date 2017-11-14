import React, { Component } from 'react';


class Password extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.password}</h1>
            </div>
        );
    }
}

const styles = {

}

export default Password;
