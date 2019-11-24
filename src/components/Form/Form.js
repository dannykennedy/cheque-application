import React from "react";
import "./Form.css";

function Form() {
    return (
        <div className="cheque">
            <input placeholder="payee"></input>
            <input placeholder="amount"></input>
            <input placeholder="date"></input>
        </div>
    );
}

export default Form;

// Ask the user for payee, amount in dollars and a date.
