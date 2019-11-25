import React, { useState } from "react";
import "./Form.css";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import {
    setAmount as _setAmount,
    setDate as _setDate,
    setPayee as _setPayee,
    setSubmitted as _setSubmitted,
    getAmountString as _getAmountString,
} from "../../ducks";
import FontAwesome from "react-fontawesome";

const MAX_CHEQUE_AMOUNT = 10000000000000;

// Ask the user for payee, amount in dollars and a date.
// Amount must be numeric, greater than 0, and smaller than 10000000000000. Date must be a valid date.
export function Form({
    amount,
    date,
    payee,
    setAmount,
    setPayee,
    setDate,
    setSubmitted,
    getAmountString,
}) {
    const [amountWarning, setAmountWarning] = useState("");
    const [payeeWarning, setPayeeWarning] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (payee === "") {
            setPayeeWarning("Please enter a payee");
        }
        if (!amount) {
            setAmountWarning("Amount cannot be blank");
        }
        if (checkValidAmount(amount).isValid && payee !== "") {
            setPayee(payee);
            setAmount(amount);
            setDate(date);
            setSubmitted(true);
            getAmountString(amount);
        }
    };

    const checkValidAmount = amountString => {
        if (!amountString) {
            return { isValid: false, alert: "Amount cannot be blank" };
        }

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
                <div className="form-warning">{payeeWarning}</div>
                <div className="form-input-section">
                    <FontAwesome name="user" className="form-icon" />
                    <input
                        placeholder="Payee"
                        onChange={e => {
                            setPayee(e.target.value);
                            setPayeeWarning("");
                        }}
                    ></input>
                </div>
                <div className="form-warning">{amountWarning}</div>
                <div className="form-input-section">
                    <FontAwesome name="dollar-sign" className="form-icon" />
                    <input
                        placeholder="Amount"
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
                        value={amount || ""}
                    ></input>
                </div>
                <div className="form-warning"></div>
                <div className="form-input-section">
                    <FontAwesome name="calendar-alt" className="form-icon" />
                    <DatePicker
                        selected={date}
                        // onSelect={this.handleSelect} //when day is clicked
                        onChange={e => {
                            setDate(e);
                        }}
                    />
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="form-button-submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

// These parts of state are passed in as props
const mapStateToProps = state => {
    return {
        isSubmitted: state.isSubmitted,
        amount: state.amount,
        date: state.date,
        payee: state.payee,
    };
};

const mapDispatchToProps = {
    setAmount: _setAmount,
    setDate: _setDate,
    setPayee: _setPayee,
    setSubmitted: _setSubmitted,
    getAmountString: _getAmountString,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
