import React from 'react';
import "./About.css";
import logo1 from '../../img/logo.png'
import logo2 from '../../img/logo2.png'

class About extends React.Component{
    constructor(props) {
        super(props)
    
    this.state = props

    }

    render() {
        return   <div className="container about__section" id="Features">
            <div className="row">
             <div className="col-md-12 col-lg-6">
                  <div>
                      <img src={logo1} className="about__photo1" />
                    </div>
                    
                  <div>
                       <img src={logo2} className="about__photo2" />
                   </div>
              </div>

                  <div className="col-md-12 col-lg-6 about__text"> 
                     <h6 className="texth4">DREAM HOLIDAYS</h6>
                        <h2 className="my-4">Enjoy unforgettable <br/> expreensec in dream hotels</h2>
                     <div>
                  <button className="button">View More</button>
                    </div>
                 </div>

       </div>
    </div>
    }
}

export default About;