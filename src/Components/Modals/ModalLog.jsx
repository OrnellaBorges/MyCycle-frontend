import React from "react";
import { Link } from "react-router-dom";

export default function ModalLog() {
  return (
    <div>
      <h3>Please before create your account or Sign in</h3>
      <div className="link-container">
        <Link to="/SignIn">Sign in Page</Link>
        <Link to="/SignUp">Sign up Page</Link>
      </div>
    </div>
  );
}
