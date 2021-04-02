import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import { useState } from 'react';
import { createContext } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

import 'react-toastify/dist/ReactToastify.css';


import Admin from './Components/Admin/Admin';
import Order from './Components/Order/Order';
import OrdersPreview from './Components/OrdersPreview/OrdersPreview';
import Greetings from './Components/Greetings/Greetings';
import TakeProduct from './Components/TakeProduct/TakeProduct';

export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/orders/:id">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <TakeProduct></TakeProduct>
          </PrivateRoute>
          <PrivateRoute path="/orderPreview">
            <OrdersPreview></OrdersPreview>
          </PrivateRoute>
          <PrivateRoute path="/greetings">
            <Greetings></Greetings>
          </PrivateRoute>


          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

