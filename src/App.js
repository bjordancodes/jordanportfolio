import React, { Component } from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import router from './router';
import Menu from './Components/Menu';
import jordan1 from './images/jordan1.jpg'


class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
      <Menu/>
        <header>
         <img src={jordan1} alt="B. Jordan" className="profile-img"/> Bonnie Jordan
        </header>
        {router}
        <footer>Website Created by Bonnie Jordan with Create React App | Header Photo by Amber Lamoreaux from Pexels</footer>
      </div>
      </HashRouter>
    );
  }
}

export default App;
