import React from 'react';
import "./Contact.css";
import avatar1 from '../../img/avatar1.png';
import avatar2 from '../../img/avatar2.png';
import avatar3 from '../../img/avatar3.png';
import group from '../../img/Group.png'

class Contact extends React.Component{
    constructor(props) {
        super(props)
    
    this.state = props

    }

    render() {
        return <div className="contact__section " id="Testimonial">

        <div className="container d-flex justify-content-between mt-5">
          <h3>What our client say</h3>
          <button className="button mb-3">View All</button>
        </div>

       <div className="container text-center">
            <div className="d-flex justify-content-between align-items-center">
              
    <div className="row d-flex justify-content-center align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                    <div className="contact__box">
                      <img src={avatar1} className="avatar" />
                       <p className="my-4"> <img src={ group}/>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.</p>
                       <h4>David lee</h4>
                    <p>
                      <a className="text-decoration-none text-dark" href="#">davidlee@</a>
                       </p>
                 </div>
              </div>
           
           <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
              <div className="contact__box">
                <img src={avatar2} className="avatar" />
                <p className="my-4"> <img src={ group}/>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.</p>
                <h4>Ravi shankor</h4>
                    <p>
                    <a className="text-decoration-none text-dark" href="#">ravishankor@</a></p>
              </div>
           </div>
           
         <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
              <div className="contact__box">
                <img src={avatar3} className="avatar" />
                <p className="my-4"> <img src={ group}/>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.</p>
                <h4>Thomas lew</h4>
                    <p>
                    <a className="text-decoration-none text-dark" href="#">thomaslew@</a></p>
                  </div>
         </div>
    </div>
              

              
          </div>
       </div>

      </div>
    }
}

export default Contact;