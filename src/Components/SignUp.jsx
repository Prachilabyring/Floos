import React from "react";
import "../Style/Auth.css";

function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        
         <form className="form">


          <div className="Row1">
              <div className="input-group">
                <input type="text" placeholder="First Name" required />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Middle Name" required />
              </div>
           </div>

            <div className="Row2"> 
              <div className="input-group">
                <input type="text" placeholder="Last Name" required />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email" required />
              </div>
            </div>

            <div className="Row3">
              <div className="input-group">
                <input type="date" placeholder="Date of Birth" required />
              </div>
              <div className="input-group">
                <input type="number" placeholder="Mobile" required />
              </div>
            </div>  
          <button className="button" type="submit">Sign Up</button>
        </form>
        <p className="switch-page">
          Already have an account? <a href="">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
