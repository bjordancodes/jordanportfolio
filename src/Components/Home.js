import React, {Component} from 'react';
import '../App.css'
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';


class Home extends Component {
constructor(props) {
super(props);
this.state = {
      inbox: 0
}
}

handleShow = (i) => {
 let e = document.getElementById("about");
 e.scrollIntoView(true);
}

render() {

return (
      <div>
      <button onClick={()=>this.handleShow("about", 0)}>Click Me Tho</button>
            <h1>
            Welcome!
            </h1> 
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
        <div id="contacts">
        <Contact/>
        </div>
        </div>
      </div>
       )

 }
}
export default Home;