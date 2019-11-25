import React from "react";
import "./Cheque.css";
import { formatDate } from "../../modules/formatDate";
import Logo from "../Logo";
import Spinner from "../Spinner";
import AnimatedText from "../AnimatedText";
import { connect } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import {
    setAmount as _setAmount,
    setDate as _setDate,
    setPayee as _setPayee,
    setSubmitted as _setSubmitted,
} from "../../ducks";

export function Cheque({
    amount,
    payee,
    date,
    drawer,
    setSubmitted,
    setPayee,
    setAmount,
    setDate,
    amountString,
    testing,
}) {
    return (
        <div>
            <div className="cheque">
                <div className="cheque-header">
                    <div className="cheque-logo-area">
                        <Logo />
                        <div className="cheque-branch-name cheque-text">
                            Castle Hill Branch
                        </div>
                    </div>
                    <div className="cheque-date-area">
                        <div className="cheque-date-row">
                            <span className="cheque-text">Date: </span>
                            <div className="cheque-date">
                                <AnimatedText
                                    text={formatDate(date)}
                                    testing={testing}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cheque-body">
                    <div className="cheque-text-area">
                        <div className="cheque-text-payee-area">
                            <span className="cheque-text">Pay:</span>
                            <div className="cheque-payee-name">
                                <AnimatedText text={payee} testing={testing} />
                            </div>
                        </div>
                        <div className="cheque-text-amount-area">
                            <div className="cheque-text-amount">
                                <span>
                                    {amountString ? (
                                        <AnimatedText
                                            text={amountString + " only"}
                                            testing={testing}
                                        />
                                    ) : (
                                        <Spinner height={"20px"} />
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="cheque-numeric-amount-area">
                        <div className="cheque-numeric-amount">
                            <div>
                                <span>$</span>
                            </div>
                            <div className="cheque-numeric-amount-text">
                                <AnimatedText
                                    text={Number.parseFloat(amount).toFixed(2)}
                                    testing={testing}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cheque-footer">
                    <div className="cheque-signature-area">
                        <AnimatedText text={drawer} testing={testing} />
                    </div>
                </div>
            </div>
            <div className="new-cheque-button-wrapper">
                <button
                    onClick={() => {
                        setSubmitted(false);
                        setDate(new Date());
                        setPayee("");
                        setAmount(null);
                    }}
                >
                    Write another cheque
                </button>
            </div>
        </div>
    );
}

// These parts of state are passed in as props
const mapStateToProps = state => {
    return {
        amountString: state.amountString,
        date: state.date,
        amount: state.amount,
        payee: state.payee,
    };
};

const mapDispatchToProps = {
    setAmount: _setAmount,
    setDate: _setDate,
    setPayee: _setPayee,
    setSubmitted: _setSubmitted,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cheque);
