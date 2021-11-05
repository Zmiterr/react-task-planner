import React  from 'react';
import './App.css';
import {store} from "./store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";
// import {AuthActions} from "./store/reducers/auth/authActions";
// import {UserInterface} from "./store/reducers/auth/authReducer";

function App() {
    //TODO make stay user authorised after reload page
   // const dispatch = useDispatch()
    // useEffect(()=>{
    //     if(localStorage.getItem('isAuth')){
    //         dispatch(AuthActions.setAuth(true))
    //         dispatch(AuthActions.setUser({username: localStorage.getItem('username')|| '' } as UserInterface))
    //     }
    // }, [])
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
