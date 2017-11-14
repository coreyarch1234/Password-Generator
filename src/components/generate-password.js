import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { generatePassword } from '../actions';

import PasswordList from './password-list';

class GeneratePassword extends Component {

    constructor(props){
        super(props);

        this.state = {
            length: '',
            passwords: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({length: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.generatePassword(this.state.length); //add new password to state
        console.log(`updated passwords`);
        this.setState({passwords: this.props.passwords}); //update passwords state array
    }

    showPasswords(){
        if (this.state.passwords !== null){
            return (
                <PasswordList passwords={this.state.passwords}/>
            )
        }else{
            return <h1> </h1>
        }
    }


    render() {
        return(
            <div style={styles.containerHome}>
                <h1 style = {styles.label}>Password Length</h1>
                <form  style={styles.submitForm} onSubmit={this.handleSubmit}>
                    <div>
                        <input  style={styles.formInput} type="text" value={this.state.length} onChange={this.handleChange} />
                        <input  style={styles.submitButton} type="submit" value="Submit" />
                    </div>
                </form>
                <div>
                    {this.showPasswords()}
                </div>
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
        justifyContent: 'center',
        height: 1000,
        backgroundColor: '#273E47',
        position: 'relative'
    },
    label: {
        color: 'white',
        font: 'arial',
        fontSize: 25,
        top: 30,
        left: 440,
        margin: 'auto',
        position: 'absolute'
    },
    submitForm: {
        padding: 50,
        top: 20,
        position: 'relative'
    },
    formInput: {
        backgroundColor: 'white',
        border: 'none',
        height: 47,
        width: 100,
        top: 200

    },
    submitButton: {
        backgroundColor: '#0066A2',
        color: 'white',
        border: 'none',
        height: 50,
        width: 100,
        font: 'arial',
        fontSize: 15,
        textShadow:'none'
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
