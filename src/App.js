import React from "react";
import Cheque from "./components/Cheque/";
import "./App.css";

function App() {
    return (
        <div className="App">
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
