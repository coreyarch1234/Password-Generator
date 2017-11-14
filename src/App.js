import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';

import reducers from './reducers';

import GeneratePassword from './components/generate-password';


const store = createStore(reducers);

class App extends Component {
    render() {
        return (
        <Provider store={store}>
          <div className="App">
            <GeneratePassword />
          </div>
        </Provider>
      );
    }
}

const styles = {

}

export default App;
