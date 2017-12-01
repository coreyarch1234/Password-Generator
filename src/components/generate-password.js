import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { generatePassword } from '../actions';

import {RadioGroup, Radio} from 'react-radio-group'

import { generateMethodOne, generateMethodTwo } from '../helpers/generator'

import PasswordList from './password-list';

class GeneratePassword extends Component {

    constructor(props){
        super(props);

        this.state = {
            passwordData: { name: '', range: '', description: '' },
            password: '',
            nameIsValid: false,
            descriptionIsValid: false
        }

    }

    handleChange(propertyName, event) {
        //this will contain the object with length and name
        const passwordData = this.state.passwordData;

        //the event.target.value will change depending on whether the length or name box is being typed
        //set the length to the object value with that key and same for name
        if (propertyName == 'range') {
            passwordData[propertyName] = event;
        }else{
            passwordData[propertyName] = event.target.value;

            if (propertyName === 'name') {
                var nameIsValid = event.target.value === '' ? false: true;
                if (nameIsValid){
                    this.setState({ passwordData: passwordData, nameIsValid: nameIsValid});
                }else{
                    this.setState({ passwordData:{name: '', range: '', description: '' }, password: '', nameIsValid: nameIsValid});
                }
            }
            else if (propertyName === 'description'){
                var descriptionIsValid = event.target.value === '' ? false: true;
                if (descriptionIsValid){
                    this.setState({ passwordData: passwordData, descriptionIsValid: descriptionIsValid });
                }else{
                    this.setState({ passwordData:{name: '', range: '', description: '' }, password: '', descriptionIsValid});
                }
            }

        }

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(`the name is valid is for submit: ${this.state.nameIsValid}`)

        // // Validate name and descriptions and password
        if (this.state.nameIsValid === false || this.state.descriptionIsValid === false) {
            return
        }else{

            if (this.state.password === ''){
                var password = generateMethodOne(this.state.passwordData.range);
                this.props.generatePassword(this.state.passwordData.name,
                    this.state.passwordData.range,
                    this.state.passwordData.description,
                    password);
                    this.setState({
                        passwordData:
                        {name: '', range: '', description: '' },
                        password: '',
                        nameIsValid: false,
                        descriptionIsValid: false

                    }); //update passwords state array
            }else{
                this.props.generatePassword(this.state.passwordData.name,
                    this.state.passwordData.range,
                    this.state.passwordData.description,
                    this.state.password);

                this.setState({
                    passwordData:
                    {name: '', range: '', description: '' },
                    password: '',
                    nameIsValid: false,
                    descriptionIsValid: false

                }); //update passwords state array
            }

            // this.props.generatePassword(this.state.passwordData.name,
            //     this.state.passwordData.range,
            //     this.state.passwordData.description,
            //     this.state.password);
            //
            // this.setState({
            //     passwordData:
            //     {name: '', range: '', description: '' },
            //     password: '',
            //     nameIsValid: false,
            //     descriptionIsValid: false
            //
            // }); //update passwords state array
        }
    }


    render() {

        const nameClass = this.state.nameIsValid ? {} : { borderColor: '#f0f' }
        const descriptionClass = this.state.descriptionIsValid ? {} : { borderColor: '#f0f' }

        return(
            <div style={styles.containerHome}>
                <h1 style={styles.label}>Generate a Password</h1>
                <form style={styles.submitForm} onSubmit={this.handleSubmit.bind(this)}>
                    <RadioGroup
                        name="passwordLength"
                        selectedValue={this.state.range}
                        onChange={this.handleChange.bind(this, 'range')}>
                        <label style={{paddingRight: 25, color:'#333f48', fontSize: 35}}>
                          <Radio value="rangeShort" />4 - 8
                        </label>
                        <label style={{paddingRight: 25, color:'#333f48', fontSize: 35}}>
                          <Radio value="rangeMedium" />9 - 13
                        </label>
                        <label style={{paddingRight: 25, color:'#333f48', fontSize: 35}}>
                          <Radio value="rangeLong" />13 - 17
                        </label>
                    </RadioGroup>

                    <div>
                        <button onClick={(e)=> {
                            e.preventDefault()
                            this.setState({ password: generateMethodOne(this.state.passwordData.range) })
                        }}
                        style={{...styles.submitButton, marginRight: 10, marginTop: 25}}>Generate 1</button>

                        <button onClick={(e)=> {
                            e.preventDefault()
                            this.setState({ password: generateMethodTwo(this.state.passwordData.range) })
                        }}
                        style={{...styles.submitButton, backgroundColor: 'green'}}>Generate 2</button>

                        <p>{this.state.password}</p>
                    </div>


                    <div>
                        <input style={{ ...styles.nameInput, ...nameClass }}
                        placeholder='  Password Name'
                        type="text"
                        value={this.state.passwordData.name}
                        onChange={this.handleChange.bind(this, 'name')} />
                    </div>

                    <div>
                        <input  style={{ ...styles.nameInput, ...descriptionClass }}
                        placeholder='  Description'
                        type="text" value={this.state.passwordData.description}
                        onChange={this.handleChange.bind(this, 'description')} />
                    </div>

                    <div>
                        <input  style={styles.submitButton} type="submit" value="Submit" />
                    </div>

                </form>

                <div >
                    <PasswordList passwords={this.props.passwords} />
                </div>
            </div>
        )
    }
}

const styles = {
    passwordList: {
        // paddingTop:30,
        display: 'flex',
        flexWrap: 'wrap',
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // alignItems: 'center'
    },
    containerHome: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 1000,
        backgroundColor: '#f6f6f6',
    },
    label: {
        color: '#333f48',
        font: 'Helvetica',
        fontSize: 60,
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
        height: 60,
        fontWeight: 'bold',
        width: 400,
        marginBottom: 15,
        marginTop: 35,
        font: 'Helvetica',
        fontSize: 25,
        textAlign: 'center',
        border: '1',
        borderRadius: '1'

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
