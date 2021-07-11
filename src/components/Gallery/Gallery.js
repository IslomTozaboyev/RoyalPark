import React from 'react';
import "./Gallery.css";

class Gallery extends React.Component{
    constructor(props) {
        super(props)
    
    this.state = props

    }

    render() {
        return <div className="container gallery__section" id="Gallery">

          <div className="row">
            
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
         <h2>About hotel gallery</h2>
          <p className="my-4">While some of these examples are real – actually <br/> offering guests a stay in the locations advertised – it’s <br/> mainly just a way.</p>
          <button className="button">View More</button>
        </div>

      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="gallery__servise gallery__box1">
             <div className="gallery__flex">
                <div>
                  <h3>Lux: Room</h3>
                <div>
                  <button className="button">Book now</button>
                 </div>
               </div>
              <div>
              <p className="gallery__subtitle">$60 night</p>
                </div>
              </div>
          </div>
      </div>



    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="gallery__box">
          <div className="gallery__servise gallery__box2">
             <div className="gallery__flex">
                <div>
                  <h3>Lux: Room</h3>
                <div>
                  <button className="button">Mini Room</button>
                 </div>
               </div>
              <div>
              <p className="gallery__subtitle">$70 night</p>
                </div>
              </div>
          </div>
          </div>
    </div>

  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="gallery__servise gallery__box3">
             <div className="gallery__flex">
                <div>
                  <h3>Lux: Room</h3>
                <div>
                  <button className="button">Stande Room</button>
                 </div>
               </div>
              <div>
              <p className="gallery__subtitle">$65 night</p>
                </div>
              </div>
          </div>
  </div>


       <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="gallery__box">
          <div className="gallery__servise gallery__box4">
             <div className="gallery__flex">
                <div>
                  <h3>Lux: Room</h3>
                <div>
                  <button className="button">Single Room</button>
                 </div>
               </div>
              <div>
              <p className="gallery__subtitle">$55 night</p>
                </div>
              </div>
          </div>
          </div>
       </div>

       <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="gallery__servise gallery__box5 mt-4">
             <div className="gallery__flex">
                <div>
                  <h3>Lux: Room</h3>
                <div>
                  <button className="button">Elite  Room</button>
                 </div>
               </div>
              <div>
              <p className="gallery__subtitle">$65 night</p>
                </div>
              </div>
              </div>
       </div>
            
       </div>
          
      </div>
    }
}

export default Gallery;