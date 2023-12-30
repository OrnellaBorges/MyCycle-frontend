import React from "react";

function handleSubmit() {
  console.log("coucou");
}

const FormContainer = ({ children, title }) => {
  return (
    <form
      className="formContainer"
      onSubmit={handleSubmit}
      /* className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 border-white" */
    >
      <h1>{title}</h1>
      {children}
    </form>
  );
};

export default FormContainer;
