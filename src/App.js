import React, { createContext, useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PriveteRoute/PrivateRoute';
import Search from './Components/Search/Search';
import SearchResult from './Components/SearchResult/SearchResult';
import 'bootstrap/dist/css/bootstrap.min.css';


export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    success:''
  });
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/search/:id">
            <Search></Search>
          </PrivateRoute>
          <PrivateRoute path="/result/:id">
            <SearchResult></SearchResult>
          </PrivateRoute>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
       </UserContext.Provider>

  );
};

export default App;
