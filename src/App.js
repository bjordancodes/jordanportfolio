import React, { Component } from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import router from './router';
import Menu from './Components/Menu';
import jordan1 from './images/jordan1.jpg'
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Icon from 'react-icons-kit';



class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
      <Menu/>
        <header>
         <img src={jordan1} alt="B. Jordan" className="profile-img"/> Bonnie Jordan
        </header>
        <div className="contactMenu">
        {/* <Icon icon="mail"/> */}
        </div>
        <div className="bigify">
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
        </div>
        <div className="lilify">
        {router}
        </div>
        <footer>Website Created by Bonnie Jordan with Create React App | Header Photo by Amber Lamoreaux from Pexels</footer>
      </div>
      </HashRouter>
    );
  }
}

export default App;
