import React, { Component } from 'react';
import { GENERATE_PASSWORD } FROM '../actions';

const GeneratePasswordReducer = (state = [], action){
    switch(action.type){
        case GENERATE_PASSWORD:
            console.log('generated password hit');
    }
}
