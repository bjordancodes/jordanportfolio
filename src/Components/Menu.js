import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

class Menu extends Component {


render() {

return (
      <div className="MenuBar">
      <Link to="/" className="link">Home</Link>
      <Link to="/AboutMe" className="link">About</Link>
    <Link to="/Contact" className="link">Contact</Link>
    <Link to="/Projects" className="link">Projects</Link>
    <Link to="Skills" className="link">Skills</Link>
      </div>
       )

 }
}
export default Menu;