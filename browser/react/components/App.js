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
  <div className="col-2">
    
  </div>
  <div className="col-2">
  
    <figure>
      <img src="baby.png" alt="Baby"  />
      <figcaption><span className="react-purple-text">CHILDCARE </span> <br /><span className="react-blue-text"> - </span><br /><span className="react-grey-text">Cover babysitting needs 
(meals, naps, pick up)</span></figcaption>
    </figure>
  </div>
  <div className="col-1">
    
  </div>
  <div className="col-2">
  <figure>
      <img src="drum.png" alt="Ideas" />
      <figcaption><span className="react-purple-text">ACTIVITIES </span><br /><span className="react-blue-text"> - </span><br /><span className="react-grey-text">Incorporate unique, enriching
   activities into childcare</span></figcaption>
    </figure> 
  </div>
  <div className="col-1">
    
  </div>
  <div className="col-2">
    <figure>
      <img src="gift.png" alt="Materials" />
      <figcaption><span className="react-purple-text">SUPPLIES</span><br /><span className="react-blue-text">-</span><br /><span className="react-grey-text">Bring materials and props
to every session</span></figcaption>
    </figure>
    
  </div>
  <div className="col-2">
    
  </div>
  </div>
  <section className="react-who-ke-are">
  <p className="react-heading">WHO KID EXPERTS ARE</p>
    <div className="react-row">
      <div className="col-2">
        
      </div>
      <div className="col-2">
        <figure>
          <img src="compass-transparent.png" alt="Knowledge" />
          <figcaption><span className="react-purple-text">BRILLIANT </span><br /><span className="react-blue-text"> - </span><br /><span className="react-grey-text">Artists, teachers and teaching assistants with professional teaching experience</span></figcaption>
        </figure>
      </div>
      <div className="col-1">
        
      </div>
      <div className="col-2">
      <figure>
          <img src="diaper.png" alt="Alphabets" />
          <figcaption><span className="react-purple-text">EXPERIENCED</span><br /><span className="react-blue-text">-</span><br /><span className="react-grey-text">Baby whispers and kid gurus with childcare/babysitting experience</span></figcaption>
          
        </figure> 
      </div>
      <div className="col-1">
        
      </div>
      <div className="col-2">
        <figure>
          <img src="light.png" alt="Light" />
          <figcaption><span className="react-purple-text">INSPIRING</span><br /><span className="react-blue-text">-</span><br /><span className="react-grey-text">Inspiring role models and good vibes people who love kids</span></figcaption>
        </figure>
        
      </div>
      <div className="col-2">
        
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
