import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { generatePassword } from '../actions';

import {RadioGroup, Radio} from 'react-radio-group'

import PasswordList from './password-list';

class GeneratePassword extends Component {

    constructor(props){
        super(props);

        this.state = {
            passwordData: {name: '', range: '', description: ''},
        }

    }

    handleChange(propertyName, event) {
        //this will contain the object with length and name
        const passwordData = this.state.passwordData;

        //the event.target.value will change depending on whether the length or name box is being typed
        //set the length to the object value with that key and same for name
        if (propertyName == 'range') {
            passwordData[propertyName] = event;
            console.log(`the value is: ${event}`);
        }else{
            passwordData[propertyName] = event.target.value;
        }

        //this will contain, {length: '5', name: 'corey', selectedValue: 'rangeShort'}
        this.setState({ passwordData: passwordData });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(`to submit: ${this.state.passwordData.length}:: ${this.state.passwordData.name}`)

        this.props.generatePassword(this.state.passwordData.name, this.state.passwordData.range, this.state.passwordData.description);
        this.setState({passwordData: {name: '', range: '', description: '' }}); //update passwords state array
    }


    render() {
        return(
            <div style={styles.containerHome}>
                <h1 style={styles.label}>Password Generator</h1>
                <form style={styles.submitForm} onSubmit={this.handleSubmit.bind(this)}>
                    <RadioGroup
                        name="passwordLength"
                        selectedValue={this.state.range}
                        onChange={this.handleChange.bind(this, 'range')}>
                        <label style={{paddingRight: 10, color:'green', fontSize: 25}}>
                          <Radio value="rangeShort" />4 - 8
                        </label>
                        <label style={{paddingRight: 10, color:'yellow', fontSize: 25}}>
                          <Radio value="rangeMedium" />9 - 13
                        </label>
                        <label style={{paddingRight: 10, color:'red', fontSize: 25}}>
                          <Radio value="rangeLong" />13 - 17
                        </label>
                    </RadioGroup>

                    <div>
                        <input  style={styles.nameInput} placeholder='  Password Name' type="text" value={this.state.passwordData.name} onChange={this.handleChange.bind(this, 'name')} />
                    </div>

                    <div>
                        <input  style={styles.nameInput} placeholder='  Description' type="text" value={this.state.passwordData.description} onChange={this.handleChange.bind(this, 'description')} />
                    </div>

                    <div>
                        <input  style={styles.submitButton} type="submit" value="Submit" />
                    </div>

                </form>

                <div style={{paddingTop:30}}>
                    <PasswordList passwords={this.props.passwords}/>
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
    },
    label: {
        color: 'white',
        font: 'arial',
        fontSize: 25,
        margin: 'auto',
        paddingTop: 25
    },
    submitForm: {
        paddingTop: 50,
        paddingBottom: 10,
    },
    nameInput: {
        backgroundColor: 'white',
        border: 'none',
        height: 47,
        width: 200,
        marginBottom: 25,
        marginTop: 25,

    },
    submitButton: {
        backgroundColor: '#0066A2',
        color: 'white',
        border: 'none',
        height: 50,
        width: 100,
        font: 'arial',
        fontSize: 15,
        textShadow:'none',
    },
}


const mapStateToProps = (state) => {
    console.log('state passwords:');
    console.log(state.passwords);
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
