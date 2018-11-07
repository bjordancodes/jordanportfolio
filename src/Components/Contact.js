import React, {Component} from 'react';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import mail from '../images/mail.png'
import githubwhite from '../images/githubwhite.png';

class Contact extends Component {

contact = (icon, link, title) => {
      return <div className="contactCard">
      <img src={icon} alt={title} className="iconsize"/>
      <a href={link} target="blank">{title}</a>
      </div>
}
render() {

return (
      <div className="bigContainer" style={{"background-color": "#7fb792"}}> 
            <div style={{height: "20px"}}></div>
            <h1>Reach Out!</h1><br/>
      I'd love to hear from you! You can reach me on: <p></p>
      <div className="projects bigify">
      {this.contact(linkedin, "https://www.linkedin.com/in/bjordancodes/", "LinkedIn" )}
      {this.contact(twitter, "https://twitter.com/bjordancodes", "Twitter")}
      {this.contact(githubwhite, "https://github.com/bjordancodes", "Github")}
      {this.contact(mail, "mailto:bjordancodes@gmail.com", "e-mail")}
      </div>
      <div className="lilify">
      <a href="https://www.linkedin.com/in/bjordancodes/">LinkedIn</a><p/>
      <a href="https://twitter.com/bjordancodes">Twitter</a><p/> 
      <a href="https://github.com/bjordancodes">Github</a><p/>
      <a href="mailto:bjordancodes@gmail.com">bjordancodes@gmail.com</a>
      </div>

      </div>
       )

 }
}
export default Contact;