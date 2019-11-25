import React from "react";
import Cheque from "./components/Cheque/";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { connect } from "react-redux";
import "./App.css";

export function App({ isSubmitted }) {
    return (
        <div className="App">
            <Navbar />
            {!isSubmitted && <Form />}
            {isSubmitted && <Cheque drawer={"John Jones"} />}
        </div>
    );
}

// These parts of state are passed in as props
const mapStateToProps = state => {
    return {
        isSubmitted: state.isSubmitted,
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
