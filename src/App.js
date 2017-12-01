import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { loadState, saveState } from './helpers/localStorage';

import './App.css';

import reducers from './reducers';

import GeneratePassword from './components/generate-password';

const persistedState = loadState(); //only at the start

const store = createStore(
    reducers,
    persistedState
);

store.subscribe(() => { // listener to save state everytime state changes
    saveState(store.getState());
})

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
