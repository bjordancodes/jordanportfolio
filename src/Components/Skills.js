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
      <div>
            <h1>
            Skills
            </h1>
            <div className="skills">
            <div className="skillDiv"><img src={javascript} alt="javascript"/><br/>Javascript</div>
            <p/>
            <div className="skillDiv"><img src={react} alt="react"/><br/>ReactJS</div>
            <p/> 
            <div className="skillDiv">
             <img src={redux} alt="redux" style={{width: "64px"}}/><br/>Redux</div>
             <p/>
             <div className="skillDiv">
             <img src={html} alt="html"/>
             <br/>HTML</div>
             <p/>
             <div className="skillDiv">
             <img src={css} alt="css"/><br/>
             CSS
             </div>
             <p/>
             <div className="skillDiv">
            <img src={postgresql} alt="postgresql" style={{width: "64px", "border-radius": "50%"}}/><br/>PostgreSQL
             </div>
            <p/>
            <div className="skillDiv">
            <img src={vue} alt="vue" style={{width: "64px"}}/>
            <br/> VueJS
            </div>
            <p/>
            <div className="skillDiv">
            <img src={git} alt="git" style={{width: "64px", "border-radius": "50%"}}/><br/>
            Git & GitHub
            </div>
            <p/>
            <div className="skillDiv">
            <img src={nodejs} alt="nodejs"/>
            <br/>NodeJS
            </div>
            <p/>
            <div className="skillDiv">
            <img src={heroku} alt="heroku" style={{width: "64px", "border-radius": "50%"}}/>
            <br/>Heroku
            </div>
            <p/>

            </div>
      </div>
       )

 }
}
export default Skills;