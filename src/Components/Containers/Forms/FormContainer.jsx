import React from "react";

function handleSubmit() {
    console.log("coucou");
}

const FormContainer = ({ children }) => {
    return (
        <form
            onSubmit={handleSubmit}
            /* className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 border-white" */
        >
            {children}
        </form>
    );
};

export default FormContainer;
