import React, {Component} from 'react';
import jordan1 from '../images/jordan1.jpg';
import jordan2 from '../images/jordan2.jpg';
import jordan3 from '../images/jordan3.jpg';

class AboutMe extends Component {


render() {

return (
      <div className="bigContainer" style={{"background-color": "#fea674"}}>
            <div style={{height: "20px"}}></div>
                   <h1>
                   About Me
                   </h1>
      <div className="projects">
      <div className="aboutTextbox">
      <img src={jordan1} alt="Jordan profile pic"/>
      <p>My name is Jordan, I'm a Dallas, Texas based former high school English teacher turned full stack web developer.</p>
      <p>I have a life long love of learning and I enjoy the challenges and problem solving involved in development.
      I'm a huge comics and MCU nerd, a dog owner, a podcaster, a crocheter, and an RPGer. I love connecting with people and learning
       about their passions!<p/>
      </p>
      </div>
      </div>

             </div>
       )

 }
}
export default AboutMe;