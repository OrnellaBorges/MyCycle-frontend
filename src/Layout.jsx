import React from "react";
import Header from "./Components/Header/Header";
//import FormContainer from "./Components/Containers/Forms/FormContainer";
import Main from "./Components/Main";

export function Layout({ children }) {
  return (
    <div className="layout">
      <Header title="My Cycle" />
      <Main classes="main">{children}</Main>
      {/* <FormContainer /> */}
    </div>
  );
}
