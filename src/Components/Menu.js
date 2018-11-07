import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

class Menu extends Component {


render() {

return (
      <div className="MenuBar">
      <div className="link" onClick={()=> this.props.handleShow("home")}>Home</div>
      <Link to="/AboutMe" className="link" onClick={()=>this.props.handleShow("about2")}>About</Link>
    <Link to="Skills" className="link" onClick={()=>this.props.handleShow("about2")}>Skills</Link>
    <Link to="/Projects" className="link" onClick={()=>this.props.handleShow("about2")}>Projects</Link>
    <Link to="/Contact" className="link" onClick={()=>this.props.handleShow("about2")}>Contact</Link>
      </div>
       )

 }
}
export default Menu;