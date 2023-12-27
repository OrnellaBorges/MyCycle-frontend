import React from "react";
import Header from "./Components/Header/Header";
import FormContainer from "./Components/Containers/Forms/FormContainer";
import Main from "./Components/Main";

export function Layout({ children }) {
    return (
        <>
            <Header />
            <Main>{children}</Main>
            <FormContainer />
        </>
    );
}
