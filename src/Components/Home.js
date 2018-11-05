import React, {Component} from 'react';
import '../App.css'
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import Icon from 'react-icons-kit';
import {scrollToElement} from 'scroll-to-element';
class Home extends Component {


render() {

return (
      <div>
            <h1>
            Welcome!
            </h1> 
            <div className="bigify">
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
        </div>
      </div>
       )

 }
}
export default Home;