import React, {Component} from 'react';
import {Link} from 'react-router';


// import SidebarContainer from '../containers/SidebarContainer';
// import PlayerContainer from '../containers/PlayerContainer';

export default class KEHome extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  handleBecomeKE () {
    this.setState({open: true});
  };


  render() {
  return (
    <div id="main">
      <nav>
      
  <a href="#"><img src="logo_3.png" className= "navbar-image"/></a> 

  <span className="right-menu">
  <a href="#" className="signUp-menu2">LOG IN</a>
  <a> <input type="button" value="BECOME A KID EXPERT" className="kesignup"/></a>
  </span>
</nav> 

<section className="main-image">
  <img src="Main2.jpg" />
</section>

<section className="section-two">
  <p className="heading">
    WHAT KID EXPERTS DO 
  </p>
  <div className="row">
  <div className="col-2">
    
  </div>
  <div className="col-2">
    <figure>
      <img src="babysitter.jpeg" alt="Books" width="200" height="200" />
      <figcaption className="blue-text">COVER BABYSITTING NEEDS (MEALS, NAPS, PICK-UP)</figcaption>
    </figure>
  </div>
  <div className="col-1">
    
  </div>
  <div className="col-2">
  <figure>
      <img src="paint.jpg" alt="Books" width="200" height="200" />
      <figcaption className="blue-text">INCORPORATE UNIQUE, ENRICHING ACTIVITIES INTO CHILDCARE</figcaption>
    </figure> 
  </div>
  <div className="col-1">
    
  </div>
  <div className="col-2">
    <figure>
      <img src="canvas.jpg" alt="Books" width="200" height="200" />
      <figcaption className="blue-text">BRING MATERIALS AND PROPS TO EVERY SESSION</figcaption>
    </figure>
    
  </div>
  <div className="col-2">
    
  </div>
  </div>
  <section className="who-ke-are">
  <p className="heading">WHO KID EXPERTS ARE</p>
    <div className="row">
      <div className="col-2">
        
      </div>
      <div className="col-2">
        <figure>
          <img src="glasses.jpg" alt="Books" width="200" height="200" />
          <figcaption className="blue-text">ARTISTS, TEACHERS AND TEACHING ASSISTANTS WITH PROFESSIONAL TEACHING EXPERIENCE</figcaption>
        </figure>
      </div>
      <div className="col-1">
        
      </div>
      <div className="col-2">
      <figure>
          <img src="star.png" alt="Books" width="200" height="200" />
          <figcaption className="blue-text">BABY WHISHPERS AND KID GURUS WITH CHILDCARE/BABYSITTING EXPERIENCE</figcaption>
        </figure> 
      </div>
      <div className="col-1">
        
      </div>
      <div className="col-2">
        <figure>
          <img src="heart.jpg" alt="Books" width="200" height="200" />
          <figcaption className="blue-text">INSPIRING ROLE MODELS AND GOOD VIBES PEOPLE WHO LOVE KIDS</figcaption>
        </figure>
        
      </div>
      <div className="col-2">
        
      </div>
    </div>
  </section>
</section>


<section className="section-three">
<input type="button" value="BECOME A KID EXPERT" className="kesignup"/>
</section>

    </div>
  );
}
}
