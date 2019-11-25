import React from "react";
import Cheque from "./components/Cheque/";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { connect } from "react-redux";
import "./App.css";

function App({ isSubmitted, amount, date, payee }) {
    return (
        <div className="App">
            <Navbar />
            {!isSubmitted && <Form />}
            {isSubmitted && (
                <Cheque
                    amount={amount}
                    amountInWords={"One hundred dollars"}
                    payeeName={payee}
                    date={date}
                    drawer={"John Jones"}
                />
            )}
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
