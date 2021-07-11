import React from 'react';
import "./Footer.css";
import icon from "../../img/icon.png";
import logo from "../../img/png1.png";

class Footer extends React.Component{
    constructor(props) {
        super(props)
    
    this.state = props

    }

    render() {
        return  <footer className="container footer">
      <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 mt-5">
                <ul>
                <li className="d-flex">
                  <img src={logo} className="footer__img" />
                  <p className="mt-5"><b>Royal Park</b></p>
                </li>
                <li>
                Travel deals on hotels,<br/> flights, vacation packages.
                </li>
                <li className="mt-2">
                  <a className="text-decoration-none text-dark " href="#">
                  @shovasatkhira88.com
                </a>
                </li>
                <li>
                <img src={icon} className="footer__icon"/>
                </li>
              </ul>
          </div>
        
        
         <div className="list col-sm-12 col-md-6 col-lg-2">
            <ul>
                <li>
                <h4>
                    <a href="#">Home</a>
                  </h4>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
                <li>
                <a href="#">Lertifiotion</a>
              </li>
                <li>
                <a href="#">Knowledge</a>
              </li>
            </ul>
         </div>
          
    <div className="list col-sm-12 col-md-6 col-lg-2">
            <ul>
              <li>
                  <h4>
                    <a href="#">Pages</a>
                  </h4>
              </li>
                <li>
                <a href="#">Blogs</a>
              </li>
                <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Communing</a>
              </li>
            </ul>
    </div>
        
      <div className="list col-sm-12 col-md-6 col-lg-4">
            <ul >
              <li>
                <h4>Subscripe</h4>
              </li>
              <li>
              <div className="d-flex ">
                  <input className="w-100 p-2" type="text" placeholder="Enter your email" />
                   <button>
                     Subscribe
                   </button>
            </div>
              </li>
              </ul>
      </div>
            
      </div>
      
      
      </footer>
    }
}

export default Footer;