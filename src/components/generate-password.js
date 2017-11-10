import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { generatePassword } from '../actions';

class GeneratePassword extends Component {

    constructor(props){
        super(props);

        this.state = {
            length: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({length: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(`A password length was submitted: ${this.state.length}`);
        this.props.generatePassword(this.state.length);
    }


    render() {
        return(
            <div style={styles.containerHome}>
                <h1>{this.props.passwords}</h1>
                <form style={styles.submitForm} onSubmit={this.handleSubmit}>
                     <label>
                         Password Length:
                         <input type="text" value={this.state.length} onChange={this.handleChange} />
                     </label>
                     <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const styles = {
    containerHome: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitForm: {
        padding: 50,
    }
}

const mapStateToProps = (state) => {
    return {
        passwords: state.passwords
     }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        generatePassword: generatePassword
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(GeneratePassword);
