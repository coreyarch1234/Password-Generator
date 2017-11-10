import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import GeneratePassword from './components/generate-password';


const store = createStore(reducers);

class App extends Component {
    render() {
        return (
        <Provider store={store}>
          <div className="App">
            <h1>Hello World</h1>
            <GeneratePassword />
          </div>
        </Provider>
      );
    }
}

export default App;
