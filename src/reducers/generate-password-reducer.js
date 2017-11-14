import React, { Component } from 'react';
import { GENERATE_PASSWORD } from '../actions/index';
import generator from '../helpers/generator'; //algorithm

const generatePasswordReducer = (state = [], action) => {

    switch(action.type){

        case GENERATE_PASSWORD:
            // console.log(`generate password reducer hit and length is: ${action.payload}`);

            const passwordLength = action.payload.length;
            // const passwordLength = action.payload;

            const password = generator(passwordLength);
            const passwordName = action.payload.name;

            const passwordData = {
                password: password,
                passwordName: passwordName
            }
            console.log('the state is: ');
            console.log(state);
            // return [...state, generator(passwordLength)];
            return [...state, passwordData];

        default:
            return state;
    }

}

export default generatePasswordReducer;
