import React from "react";
import FontAwesome from "react-fontawesome";
import "./Logo.css";

function Logo() {
    return (
        <div className="logo-wrapper">
            <div className="logo-icon">
                <FontAwesome name="hand-holding-usd" />
            </div>
            <div className="logo-bank-name">First Bank of SmartCorp</div>
        </div>
    );
}

export default Logo;
