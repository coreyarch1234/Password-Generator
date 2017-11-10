import React, { Component } from 'react';
import { GENERATE_PASSWORD } from '../actions/index';
import generator from '../helpers/generator';

const generatePasswordReducer = (state = [], action) => {

    switch(action.type){

        case GENERATE_PASSWORD:
            console.log(`generate password reducer hit and length is: ${action.payload}`);

            const passwordLength = action.payload;
            
            return [...state, generator(passwordLength)];

        default:
            return state;
    }

}

export default generatePasswordReducer;
