import React from "react";
import FormContainer from "./FormContainer";
import Input from "../../Input";

import { Link } from "react-router-dom";

const In = () => {
    return (
        <>
            <FormContainer>
                <Input labelName="Email" inputType="email" />
                <Input labelName="Password" inputType="password" />
                <MyButton>
                    <Button buttonType="submit" />
                </MyButton>
            </FormContainer>
            <div>
                <Link to="/SignIn">Sign in Page</Link>
            </div>
        </>
    );
};

export default In;
