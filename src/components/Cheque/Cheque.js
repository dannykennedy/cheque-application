import React from "react";
import FontAwesome from "react-fontawesome";
import "./Cheque.css";
import ChequePic from "./BritishChequeAnnotated.png";
import { formatDate } from "../../modules/formatDate";
import SplitText from "react-pose-text";

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

function Cheque({ amount, amountInWords, payeeName, date, drawer }) {
    return (
        <div>
            <div className="cheque">
                <div className="cheque-header">
                    <div className="cheque-logo-area">
                        <div className="cheque-logo">
                            <div className="cheque-logo-icon">
                                <FontAwesome name="hand-holding-usd" />
                            </div>
                            <div className="cheque-bank-name">
                                First Bank of SmartCorp
                            </div>
                        </div>
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
                                    <SplitText
                                        initialPose="exit"
                                        pose="enter"
                                        charPoses={charPoses}
                                    >
                                        {amountInWords + " only"}
                                    </SplitText>
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
            {/* <img src={ChequePic} alt="cheque" /> */}
        </div>
    );
}

export default Cheque;
