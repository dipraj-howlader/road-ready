import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import SearchResult from './Components/SearchResult/SearchResult';



export const UserContext = createContext();

const App = () => {
  const [ridersInfo, setRidersInfo] = useState([]);
  return (
    <UserContext.Provider value={[ridersInfo, setRidersInfo]}>
      
      <Router>
      {
        console.log("Dipra",ridersInfo)
      }
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/search">
            <Search></Search>
          </Route>
          <Router path="/result">
            <SearchResult></SearchResult>
          </Router>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router> </UserContext.Provider>

  );
};

export default App;
