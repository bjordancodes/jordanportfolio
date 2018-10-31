import React, {Component} from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import dash1 from '../images/dash1.PNG'
import dash2 from '../images/dash2.PNG'
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
        original: dash2,
        thumbnail: dash2,
        originalClass: 'slide'
    },
    {
        original: dash3,
        thumbnail: dash3,
        originalClass: 'slide'
    },
    {
        original: dash4,
        thumbnail: dash4,
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
      <div className="projects"> <h1>
          Projects 
          </h1><p/>
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
          </div>
       )

 }
}
export default Projects;