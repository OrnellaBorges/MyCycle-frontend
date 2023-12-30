import React from "react";
import FormContainer from "./FormContainer";
import Input from "../../Input";

import { MyButton } from "./MyButton";
import Button from "../../Buttons/button";
import { Link } from "react-router-dom";

const In = () => {
  return (
    <div className="container">
      <FormContainer title="Sign In">
        <Input labelName="Email" inputType="email" />
        <Input labelName="Password" inputType="password" />
        <MyButton>
          <Button text="Submit" buttonType="submit" />
        </MyButton>
      </FormContainer>
      <div>
        <Link to="/SignUp">Sign up Page</Link>
        <Link to="/Forgot">Forgot password Page</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default In;
