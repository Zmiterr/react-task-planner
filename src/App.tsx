import React from 'react';
import './App.css';
import {store} from "./store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Layout>
                  <Navbar />
                  <Layout.Content>
                      <AppRouter />
                  </Layout.Content>

              </Layout>
          </BrowserRouter>
      </Provider>

  );
}

export default App;
