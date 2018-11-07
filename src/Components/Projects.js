import React, {Component} from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import dash1 from '../images/dash1.PNG'
import dash35 from '../images/dash35.png'
import dash3 from '../images/dash3.PNG'
import dash4 from '../images/dash4.PNG'
import kitney1 from '../images/kitney1.PNG'
import kitney2 from '../images/kitney2.PNG'
import kitney3 from '../images/kitney3.PNG'
import kitney4 from '../images/kitney4.PNG'


class Projects extends Component {


render() {
const dashImages = [
    {
        original: dash1,
        thumbnail: dash1,
        originalClass: 'slide'
    },
    {
        original: dash35,
        thumbnail: dash35,
        originalClass: 'slide'
    },
    
]

const kitneyImages = [
    {
        original: kitney1,
        thumbnail: kitney1,
        originalClass: 'slide'
    },{
        original: kitney2,
        thumbnail: kitney2,
        originalClass: 'slide'
    },{
        original: kitney3,
        thumbnail: kitney3,
        originalClass: 'slide'
    },{
        original: kitney4,
        thumbnail: kitney4,
        originalClass: 'slide'
    },
]
return (
    <div style={{"background-color": "#77e0dc", "min-height": '100vh'}}>
        <div style={{height: "20px"}}></div>
      <h1>
          Projects 
          </h1><p/>
      <div className="projects">
      <div className="GalleryContainer">
          <ImageGallery 
          items={dashImages} 
          thumbnailPosition={'left'}
          showBullets={true}
      infinite={true}
      showFullscreenButton={false}
      showNav={false}
      autoPlay={true}/><br/>
          </div>
          {/* <div className="GalleryContainer"> 
          placeholder text</div>
          <div className="GalleryContainer"> 
          placeholder text</div> */}
          <div className="textbox">
              <h1>Dash Dallas SC</h1><h4>Personal Project</h4>
              <p><a href="http://68.183.118.66:3001/#/">View live</a><br/>
              <a href="https://github.com/bjordancodes/dash-dallas-sc">Github</a><br/><br/>
              Recreational Soccer Center Website<br/><br/>
React | Node | Express | Redux | PostgreSQL | Mobile first UI | HTML | CSS | Javascript<br/><br/>

An application for players and the facility to schedule and communicate about rec league soccer<br/><br/>
<ul>
<li>
Created PostgreSQL tables for storing player, schedule, and team data
</li>
<li>
Implemented full CRUD on 5 database tables using PostgreSQL
</li>
<li>
Implemented nodemailer, ReactTables, and auth0 to display and protect data
</li>
<li>
Created manager view and personalized user views to streamline editing and distribution of information<br/>
</li>
</ul>

              </p>
              </div>
          <div className="textbox bigify">
          <p><h1>Kitney-Exchange</h1> <h4>Group Project</h4>
          <a href="http://206.189.209.216:3001/#/">View live</a><br/>
          <a href="https://github.com/Kitney-Exchange/kitney-exchange">Github</a><p/>
          
          React | Node | Express | Redux | PostgreSQL | HTML | CSS | Javascript<br/><br/>

A platform that connects kidney failure patients to other donors and patients for an organ exchange through local hospitals
<ul>
<li>
Designed schema and created databases for all user and hospital information in PostgreSQL
</li>
<li>
Created redux store and managed all data flow between front and back end of application
</li>
<li>
Collaborated daily with team on front and back end issues
</li>
</ul>
</p>
          </div>
    <div className="GalleryContainer">
      <ImageGallery 
      items={kitneyImages} 
      thumbnailPosition={'right'}
      showBullets={true}
      infinite={true}
      showFullscreenButton={false}
      showNav={false}
      autoPlay={true}/>
          </div>

<div className="textbox lilify">
          <p><h1>Kitney-Exchange</h1> <h4>Group Project</h4>
          <a href="http://206.189.209.216:3001/#/">View live</a><br/>
          <a href="https://github.com/Kitney-Exchange/kitney-exchange">Github</a><p/>
          
          React | Node | Express | Redux | PostgreSQL | HTML | CSS | Javascript<br/><br/>

A platform that connects kidney failure patients to other donors and patients for an organ exchange through local hospitals
<ul>
<li>
Designed schema and created databases for all user and hospital information in PostgreSQL
</li>
<li>
Created redux store and managed all data flow between front and back end of application
</li>
<li>
Collaborated daily with team on front and back end issues
</li>
</ul>
</p>
          </div>
          </div>
          </div>
       )

 }
}
export default Projects;