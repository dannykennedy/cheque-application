import React, { useState } from "react";
import "./Form.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MAX_CHEQUE_AMOUNT = 10000000000000;

// Ask the user for payee, amount in dollars and a date.
// Amount must be numeric, greater than 0, and smaller than 10000000000000. Date must be a valid date.
function Form() {
    const [payee, setPayee] = useState("");
    const [amount, setAmount] = useState("");
    const [amountWarning, setAmountWarning] = useState("");
    const [date, setDate] = useState(new Date());
    const [dateInputFocused, setDateInputFocused] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        alert("You submitted the form");
    };

    const checkValidAmount = amountString => {
        if (isNaN(amountString)) {
            return { isValid: false, alert: "Please enter numbers only" };
        } else {
            if (parseInt(amountString) < 0) {
                return {
                    isValid: false,
                    alert: "Amount must be greater than zero",
                };
            } else if (parseInt(amountString) > MAX_CHEQUE_AMOUNT) {
                return {
                    isValid: false,
                    alert: `Amount must be less than ${MAX_CHEQUE_AMOUNT}`,
                };
            } else {
                return { isValid: true, alert: null };
            }
        }
    };

    return (
        <div id="form-wrapper">
            <form id="form">
                <input
                    placeholder="payee"
                    onChange={e => {
                        setPayee(e.target.value);
                    }}
                ></input>
                <div>{amountWarning}</div>
                <input
                    placeholder="amount"
                    onChange={e => {
                        const check = checkValidAmount(e.target.value);
                        if (check.isValid) {
                            setAmount(e.target.value);
                            setAmountWarning("");
                        } else {
                            setAmount(e.target.value);
                            setAmountWarning(check.alert);
                        }
                    }}
                    value={amount}
                ></input>
                <DatePicker
                    selected={date}
                    // onSelect={this.handleSelect} //when day is clicked
                    onChange={e => {
                        setDate(e);
                    }}
                />
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
            <div>{payee}</div>
            <div>{amount}</div>
            <div>{date.toString()}</div>
        </div>
    );
}

export default Form;
