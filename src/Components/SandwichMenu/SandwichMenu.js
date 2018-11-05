import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class SandwichMenu extends Component {


render() {

return (
      <div>
    <Link to="/AboutMe" className="link">About</Link>
    <Link to="/Contact" className="link">Contact</Link>
    <Link to="/Projects" className="link">Projects</Link>
    <Link to="Skills" className="link">Skills</Link> 
          </div>
       )

 }
}
export default SandwichMenu;