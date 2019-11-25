import React from "react";
import Cheque from "./components/Cheque/";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Form />
            <Cheque
                amount={100}
                amountInWords={"One hundred dollars"}
                payeeName={"Wikimedia Foundation"}
                date={new Date()}
                drawer={"John Jones"}
            />
        </div>
    );
}

export default App;
