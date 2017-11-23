import React, { Component } from 'react';
import { GENERATE_PASSWORD } from '../actions/index';
import generator from '../helpers/generator'; //algorithm

const generatePasswordReducer = (state = [], action) => {

    switch(action.type){

        case GENERATE_PASSWORD:
            // console.log(`generate password reducer hit and length is: ${action.payload}`);

            const passwordLength = action.payload.length;
            // const passwordLength = action.payload;
            const passwordName = action.payload.name;
            const passwordRange = action.payload.range;

            const password = generator(passwordRange);


            const passwordData = {
                password: password,
                passwordName: passwordName,
                passwordRange: passwordRange
            }

            return [...state, passwordData];

        default:
            return state;
    }

}

export default generatePasswordReducer;
