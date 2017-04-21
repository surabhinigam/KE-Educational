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
<section className="react-main-image">
  <img src="Main5.jpg" />
  <h2><span>REIMAGINE <br />BABYSITTING<br />WITH <br /> ACTIVITIES</span></h2>
</section>

<section className="react-section-two">
  <p className="react-heading">
    WHAT KID EXPERTS DO 
  </p>
  <div className="react-row row">
  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
  
    <figure>
      <img className="react-icons" src="baby.png" alt="Baby" height="130" width="130" />
      <figcaption><span className="react-purple-text">CHILDCARE </span><p className="react-description">Cover babysitting needs 
(meals, naps, pick up)</p></figcaption>
    </figure>
  </div>
  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" >
  <figure>
      <img className="react-icons" src="drum.png" alt="Ideas" height="130" width="130" />
      <figcaption><span className="react-purple-text">ACTIVITIES </span><p className="react-description">Incorporate unique, enriching
   activities into childcare</p></figcaption>
    </figure> 
  </div>
  
  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" >
    <figure>
      <img className="react-icons" src="gift.png" alt="Materials" height="130" width="130" />
      <figcaption><span className="react-purple-text">SUPPLIES</span><p className="react-description">Bring materials and props
to every session</p></figcaption>
    </figure>
    
  </div>
  </div>
  <section className="react-who-ke-are">
  <p className="react-heading">WHO KID EXPERTS ARE</p>
    <div className="react-row row">
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" >
        <figure>
          <img className="react-icons" src="compass-transparent.png" alt="Knowledge" height="130" width="130"/>
          <figcaption><span className="react-purple-text">BRILLIANT </span><p className="react-description">Artists, teachers and teaching assistants with professional teaching experience</p></figcaption>
        </figure>
      </div>
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" >
      <figure>
          <img className="react-icons" src="diaper2.png" alt="Alphabets" height="130" width="130"/>
          <figcaption><span className="react-purple-text">EXPERIENCED</span><p className="react-description">Baby whispers and kid gurus with childcare/babysitting experience</p></figcaption>
          
        </figure> 
      </div>
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" >
        <figure>
          <img className="react-icons" src="light.png" alt="Light" height="130" width="130"/>
          <figcaption><span className="react-purple-text">INSPIRING</span><p className="react-description">Inspiring role models and good vibes people who love kids</p></figcaption>
        </figure>
        
      </div>
    </div>
  </section>
</section>


<section className="react-section-three">
<input type="button" value="BECOME A KID EXPERT" className="react-kesignup"/>
</section>

    </div>
  );
}
}
