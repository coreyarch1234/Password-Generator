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
                {this.state.length}
                <form style={styles.submitForm} onSubmit={this.handleSubmit}>
                     <label>
                         Password Length:
                         <input type="text" value={this.state.length} onChange={this.handleChange} />
                     </label>
                     <input type="submit" value="Submit" />
                </form>
                {this.showPasswords()}
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
