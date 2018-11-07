import React, {Component} from 'react';
import '../App.css'
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import jordan1 from '../images/jordan1.jpg';
import downarrow from '../images/downarrow.png';
import Menu from './Menu';


class Home extends Component {
constructor(props) {
super(props);
this.state = {
      inbox: 0
}
}

handleShow = (i) => {
 let e = document.getElementById(i);
 e.scrollIntoView({block: "start", behavior: "smooth", inline: "start" });
}

render() {

return (
      <div>
      <div className="MenuBar bigify">
      <div to="/AboutMe" className="link" onClick={()=>this.handleShow("about")}>About</div>
      <div to="Skills" className="link" onClick={()=>this.handleShow("skills")}>Skills</div>
      <div to="/Projects" className="link" onClick={()=>this.handleShow("projects")}>Projects</div>
      <div to="/Contact" className="link" onClick={()=>this.handleShow("contact")}>Contact</div>
      </div>
      <div className="lilify">
      <Menu/>
      </div>
      <header>
         <img src={jordan1} alt="B. Jordan" className="profile-img"/> Bonnie Jordan
      <img src={downarrow} className="arrow" onClick={()=>this.handleShow("about")} alt="down arrow"/>
        </header>
            <div className="bigify">
        <div id="about">
        <AboutMe />
        </div>
        <div id="skills">
        <Skills/>
        </div>
        <div id="projects">
        <Projects/>
        </div>
        <div id="contact">
        <Contact/>
        </div>
        </div>
      </div>
       )

 }
}
export default Home;