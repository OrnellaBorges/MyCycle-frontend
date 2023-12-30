import React from "react";
import FormContainer from "./FormContainer";
import Input from "../../Input";
import { MyButton } from "./MyButton";
import Button from "../../Buttons/button";

import { Link } from "react-router-dom";

const In = () => {
  return (
    <>
      <FormContainer title="Sign Up page">
        <Input labelName="Email" inputType="email" />
        <Input labelName="Password" inputType="password" />
        <MyButton>
          <Button buttonType="submit" />
        </MyButton>
      </FormContainer>
      <div>
        <Link to="/SignIn">Sign in Page</Link>
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default In;
