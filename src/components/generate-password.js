import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { generatePassword } from '../actions';

export default class GeneratePassword extends Component {

    render() {
        return(
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}
