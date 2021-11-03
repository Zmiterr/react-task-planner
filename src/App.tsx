import React from 'react';
import './App.css';
import {store} from "./store";
import {Provider} from "react-redux";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              test
          </div>
      </Provider>

  );
}

export default App;
