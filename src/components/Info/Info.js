import React from 'react';
import "./Info.css";

class Info extends React.Component{
    constructor(props) {
        super(props)
    
    this.state = props

    }

    render() {
        return <div className="info info-bg">
       <div className="container">
          <h3>SERENITY</h3>
          <h1>Stay with us feel <br /> like <span>home</span>.</h1>
          <p className="py-3">Pet freintly hotels are becoming <br /> incrasigly popular, appeling to travellers <br /> who can't bear to be parted</p>
          <div className="info__button">
          <button className="button mb-3">Read More</button>
       </div>
        </div>

        <div className="container d-flex mt-5">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-3 info__flex">
                 <h5>Check in</h5>
                <p>10 Feb 2021</p>
            </div>

            <div className="col-md-3 info__flex">
                <h5>Check out</h5>
                <p>13 Feb 2021</p>
           </div>

           <div className="col-md-3 info__flex">
                <h5>Person</h5>
                <p>2 Adults 1 kid</p>
          </div>

          <div className="col-md-3 info__flex">
            <div>
            <button className="button">Find room</button>
           </div>
         </div>
    </div>
          
        </div>
      </div>
    }
}

export default Info;