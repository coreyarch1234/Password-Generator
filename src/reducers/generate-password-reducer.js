import React, { Component } from 'react';
import { GENERATE_PASSWORD } from '../actions/index';
import generator from '../helpers/generator'; //algorithm

const generatePasswordReducer = (state = [], action) => {

    switch(action.type){

        case GENERATE_PASSWORD:

            const passwordName = action.payload.name;
            const passwordRange = action.payload.range; // !!!!
            const passwordDescription = action.payload.description;

            const password = action.payload.password; // !!!!!
            // const password = generator(passwordRange); // !!!!!


            const passwordData = {
                password: password,
                passwordName: passwordName,
                passwordRange: passwordRange,
                passwordDescription: passwordDescription
            }

            return [...state, passwordData];

        default:
            return state;
    }

}

export default generatePasswordReducer;
