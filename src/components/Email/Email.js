import React from 'react';
import "./Email.css";

class Email extends React.Component{
    constructor(props) {
        super(props)
    
    this.state = props

    }

    render() {
        return <div className="container mt-5 text-center email">
        <p>STAY IN TOUCH</p>
        <h2 className="my-4">Join our email. First to know about specials,events and more!</h2>
        <div className=" text-center">
          <input type="text" placeholder="Enter your email" />
          <button>
          Subscribe
          </button>
        </div>
      </div>
    }
}

export default Email;