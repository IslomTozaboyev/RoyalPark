import React from 'react';
import "./Choose.css";
import vektor1 from '../../img/vektor1.png';
import vektor2 from '../../img/vektor2.png';
import vektor3 from '../../img/vektor3.png';
import vektor4 from '../../img/vektor4.png';

class Choose extends React.Component{
    constructor(props) {
        super(props)
    
    this.state = props

    }

    render() {
        return    <div className="container text-center choose__section">
        <div className="text-center">
          <h3 className="mb-3">Why you choose us!</h3>
            <p>Naturally, its becoming evevt more important for hotel and hospital brands to start out from the <br />
              crowd. Content marketing remains a key way for hotels to do this.</p>
          </div>
          
          <div className="row d-flex justify-content-center align-items-center">

            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
               <div className="chooseBox h-100">
                 <img src={vektor1} className="photo1" />
                 <h2 className="my-3">Easy Booking</h2>
                 <p>The booking proces sould include minemal steps</p>
             </div>
           </div>
  
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <div className="chooseBox h-100">
                  <img src={vektor2} className="photo1" />
                  <h2 className="my-3">Friendly interface</h2>
                  <p>A hotel booking engine with a good user-friendly</p>
               </div>
           </div>
  
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
               <div className="chooseBox h-100">
                 <img src={vektor3} className="photo1" />
                  <h2 className="my-3">Responsibility</h2>
                  <p>You should be able to add rooms to your system.</p>
              </div>
           </div>
  
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <div className="chooseBox h-100">
                 <img src={vektor4} className="photo1" />
                  <h2 className="my-3">Quick order supply</h2>
                  <p>The booking process should include minimal steps.</p>
             </div>
            </div>
            
         </div>
        
       </div>
    }
}

export default Choose;