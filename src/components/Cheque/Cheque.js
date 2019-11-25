import React from "react";
import "./Cheque.css";
import { formatDate } from "../../modules/formatDate";
import SplitText from "react-pose-text";
import Logo from "../Logo";
import { connect } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import {
    setAmount as _setAmount,
    setDate as _setDate,
    setPayee as _setPayee,
    setSubmitted as _setSubmitted,
} from "../../ducks";

// Full React Pose Text documentation can be found at
// https://popmotion.io/pose/api/react-pose-text
const charPoses = {
    exit: { opacity: 0, y: -2 },
    enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 50,
    },
};

function Cheque({
    amount,
    payeeName,
    date,
    drawer,
    setSubmitted,
    setPayee,
    setAmount,
    setDate,
    amountString,
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
                        <span className="cheque-text">Date: </span>
                        <span className="cheque-date">
                            <SplitText
                                initialPose="exit"
                                pose="enter"
                                charPoses={charPoses}
                            >
                                {formatDate(date)}
                            </SplitText>
                        </span>
                    </div>
                </div>
                <div className="cheque-body">
                    <div className="cheque-text-area">
                        <div className="cheque-text-payee-area">
                            <span className="cheque-text">Pay:</span>
                            <div className="cheque-payee-name">
                                <SplitText
                                    initialPose="exit"
                                    pose="enter"
                                    charPoses={charPoses}
                                >
                                    {payeeName}
                                </SplitText>
                            </div>
                        </div>
                        <div className="cheque-text-amount-area">
                            <div className="cheque-text-amount">
                                <span>
                                    {amountString && (
                                        <SplitText
                                            initialPose="exit"
                                            pose="enter"
                                            charPoses={charPoses}
                                        >
                                            {amountString + " only"}
                                        </SplitText>
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
                                <SplitText
                                    initialPose="exit"
                                    pose="enter"
                                    charPoses={charPoses}
                                >
                                    {amount.toString()}
                                </SplitText>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cheque-footer">
                    <div className="cheque-signature-area">
                        <SplitText
                            initialPose="exit"
                            pose="enter"
                            charPoses={charPoses}
                        >
                            {drawer}
                        </SplitText>
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
            {/* <img src={ChequePic} alt="cheque" /> */}
        </div>
    );
}

// These parts of state are passed in as props
const mapStateToProps = state => {
    return {
        amountString: state.amountString,
    };
};

const mapDispatchToProps = {
    setAmount: _setAmount,
    setDate: _setDate,
    setPayee: _setPayee,
    setSubmitted: _setSubmitted,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cheque);
