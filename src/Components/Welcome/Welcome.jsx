import React from "react";
import { Link } from "react-router-dom";
import welcome from "../../assets/welcome.png";

export default function Welcome() {
  return (
    <div className="welcome">
      <h2>Welcome to My Cycle App</h2>

      <div>
        <img src={welcome} alt="image de presentation pour faire jolie" />
      </div>

      <div className="link-container">
        <Link to="/StartCycle">Get started</Link>
        <Link to="/SignIn">Sign in Page</Link>
        <Link to="/SignUp">Sign up Page</Link>
      </div>
    </div>
  );
}
