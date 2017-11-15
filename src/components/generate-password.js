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
            passwordData: {length: '', name: '', selectedValue: ''},
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

        this.props.generatePassword(this.state.passwordData.length, this.state.passwordData.name, this.state.passwordData.selectedValue);
        this.setState({passwordData: { length: '', name: '', selectedValue: '' }}); //update passwords state array
    }


    render() {
        return(
            <div style={styles.containerHome}>
                <h1 style={styles.label}>Password Generator</h1>
                <form  style={styles.submitForm} onSubmit={this.handleSubmit.bind(this)}>
                    <RadioGroup
                        name="passwordLength"
                        selectedValue={this.state.selectedValue}
                        onChange={this.handleChange.bind(this, 'range')}>
                        <label style={{paddingRight: 10, color:'green', fontSize: 25}}>
                          <Radio value="rangeShort" />6 - 8
                        </label>
                        <label style={{paddingRight: 10, color:'yellow', fontSize: 25}}>
                          <Radio value="rangeMedium" />9 - 12
                        </label>
                        <label style={{paddingRight: 10, color:'red', fontSize: 25}}>
                          <Radio value="rangeLong" />13 - 18
                        </label>
                    </RadioGroup>
                    <br/>

                    <div>
                        <input  style={styles.formInput} placeholder='  Password Length' type="text" value={this.state.passwordData.length} onChange={this.handleChange.bind(this, 'length')} />
                    </div>
                    <br/>
                    <div>
                        <input  style={styles.formInput} placeholder='  Password Name' type="text" value={this.state.passwordData.name} onChange={this.handleChange.bind(this, 'name')} />
                    </div>

                    <div>
                    <br/>
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
        position: 'relative'
    },
    label: {
        color: 'white',
        font: 'arial',
        fontSize: 25,
        top: 30,
        left: 425,
        margin: 'auto',
        position: 'absolute'
    },
    submitForm: {
        paddingTop: 50,
        paddingBottom: 10,
        top: 30,
        position: 'relative',
    },
    formInput: {
        backgroundColor: 'white',
        border: 'none',
        height: 47,
        width: 200,
        top: 100,

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
