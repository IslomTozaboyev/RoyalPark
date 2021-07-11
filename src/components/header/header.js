import React from 'react';
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHdd } from "@fortawesome/free-regular-svg-icons";
import logo from '../../img/png1.png';
import { Slide } from "react-awesome-reveal";
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component{
    state ={hideHeader: true}

    toggleHeader = () => {
        this.setState((state) => {
            console.log(state);
           return { hideHeader: !state.hideHeader}
       })
    }

    render() {
        return <header className="header__section info-bg">
            <div className="container d-flex flex-wrap justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                         <img className="rasm" src={logo} alt="rasm" />
                          <h6 className="fw-bold mt-2">Royal Park</h6>
                <div className="d-flex align-items-center">
                    <ul className="d-none d-lg-flex align-items-center m-0">
                       <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#Features">Features</a>
                        </li>
                        <li>
                            <a href="#Gallery">Gallery</a>
                        </li>
                        <li>
                            <a href="#Testimonial">Testimonial</a>
                        </li>
                    </ul>
                </div>
                </div>

                <div className="d-none d-lg-flex">
                            <button className="button btn btn-primary">
                            Book now                                 
                           </button>
                </div>

              
                <div className="d-block d-lg-none">
                 <button className="btn me-2"  onClick={this.toggleHeader}>
                        <FontAwesomeIcon className="" icon={faBars }/>
                    </button>
                </div>
                <Slide direction="down" className={`menu-mobile d-lg-none w-100 ${this.state.hideHeader && "d-none" || ""}`}>
                <ul className="menu  mt-5">
                        <li className="my-4">
                              <a href="#Home"><b>Home</b></a>
                        </li>
                        <li className="my-4">
                            <a href="#Features"><b>Features</b></a>
                        </li>
                        <li className="my-4">
                            <a href="#Gallery"><b>Gallery</b></a>
                        </li>
                        <li className="my-4">
                            <a href="#Testimonial"><b>Testimonial</b></a>
                        </li>
                    </ul>
                </Slide>
            </div>
        </header>
    }
}

export default Header;