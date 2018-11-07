import React, {Component} from 'react';
import css from '../images/css.png';
import html from '../images/html.png';
import javascript from '../images/javascript.png';
import redux from '../images/redux.png';
import react from '../images/react.png';
import postgresql from '../images/postgresql.png';
import vue from '../images/vue.png';
import nodejs from '../images/nodejs.png';
import git from '../images/git.png';
import heroku from '../images/heroku.png';

class Skills extends Component {


render() {

return (
      <div className="bigContainer" style={{"background-color": "#ef959e"}}>
            <div style={{height: "20px"}}></div>
            <h1>
            Skills
            </h1>
            <div className="skills">
            <div className="skillDiv"><img src={javascript} alt="javascript" className="skillimg"/><br/>Javascript</div>
            <p/>
            <div className="skillDiv">
            <img src={react} alt="react" className="skillimg"/><br/>ReactJS</div>
            <p/> 
            <div className="skillDiv">
             <img src={redux} alt="redux" className="skillimg" style={{"border-radius": "50%"}}/><br/>Redux</div>
             <p/>
             <div className="skillDiv">
             <img src={html} alt="html" className="skillimg"/>
             <br/>HTML</div>
             <p/>
             <div className="skillDiv">
             <img src={css} alt="css" className="skillimg"/><br/>
             CSS
             </div>
             <p/>
             <div className="skillDiv">
            <img src={postgresql} alt="postgresql" className="skillimg" style={{"border-radius": "50%"}}/><br/>PostgreSQL
             </div>
            <p/>
            <div className="skillDiv">
            <img src={vue} alt="vue" className="skillimg"/>
            <br/> VueJS
            </div>
            <p/>
            <div className="skillDiv">
            <img src={git} alt="git" className="skillimg" style={{"border-radius": "50%"}}/><br/>
            Git & GitHub
            </div>
            <p/>
            <div className="skillDiv">
            <img src={nodejs} alt="nodejs" className="skillimg"/>
            <br/>NodeJS
            </div>
            <p/>
            <div className="skillDiv">
            <img src={heroku} alt="heroku" className="skillimg" style={{"border-radius": "50%"}}/>
            <br/>Heroku
            </div>
            <p/>

            </div>
      </div>
       )

 }
}
export default Skills;