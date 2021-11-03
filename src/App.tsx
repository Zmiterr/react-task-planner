import React from 'react';
import './App.css';
import {store} from "./store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <div className="App">
                  <AppRouter />
              </div>
          </BrowserRouter>
      </Provider>

  );
}

export default App;
